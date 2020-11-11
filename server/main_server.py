import asyncio
import json
import websockets
import os
import io



class Server():

    ################################## FONCTION D'INITIALISATION ##################################
    # C'est cette fonction qui est appelée dès qu'une instance de cette classe est créée

    def __init__(self):
        """Fonction d'initialisation de la classe server

        Auteur: Nathan
        """
        #
        self.IP="localhost"
        self.PORT=6789
        self.logfile="logs/log.nath"
        self.cac="|"
        self.cacc="@"
        self.ccac="#"
        self.characters="azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890_*=()[]"
        self.USERS = set()

    ################################## AUTRES FONCTIONS ##################################
    # Ce sont les autres fonction que je n'ai pas encoré classées/commentées

    async def log(self,message):
        """Fonction qui affiche et enregistre un log

        Auteur: Nathan
        """
        assert isinstance(message, str)
        print("log : "+message)
        f=io.open(self.logfile,"a",encoding="utf-8")
        f.write(message)
        f.close()

    ################################## FONCTIONS DE (DE)CONNEXION DE CLIENT ##################################
    # Ce sont ces 2 fonctions qui gèrent la connexion et la deconnexion d'un client
    
    async def register(self,websocket):
        """Fonction qui enregistre un client websocket

        Auteur: Nathan
        """
        self.USERS.add(websocket)

    async def unregister(self,websocket):
        """Fonction qui desenregistre un client websocket

        Auteur: Nathan
        """
        self.USERS.remove(websocket)

    ################################## FONCTION PRINCIPALE ##################################
    # C'EST CETTE FONCTION QUI EST APPELEE POUR UN CLIENT DES QU'IL Y EN A UN QUI SE CONNECTE

    async def main_server(self, websocket, path):
        """Fonction qui traite un client, et ce qu'il envoie

        Auteur: Nathan
        """
        await self.register(websocket)
        try:
            async for message in websocket:
                error = 0  # 0 = no errors , 1 = unsupported event
                data = json.loads(message)
                if "action" in data.keys():
                    
                    # nouveau quiz
                    if data["action"] == "nouveau quiz":
                        # on récupere les questions
                        questions = data["questions"]
                        # on crée le texte du fichier
                        txt = "var questions = ["
                        # les questions seront deja en format js, il ne reste plus qu'a les ajouter au fichier
                        for q in questions:
                            txt += "\n\t" + q
                        txt += "\n]"
                        # on crée le répertoire
                        idq = str(len(os.listdir("./../quizs/")) + 1)
                        os.mkdir("./../quizs/q" + idq)
                        # on enregistre le fichier du quiz
                        f = io.open("./../quizs/q" + idq + "/quiz.js", "w", encoding="utf-8")
                        f.write(txt)
                        f.close()
                        # on l'ajoute ensuite aux quizs dispos
                        # on va ouvrir le fichier de la liste des quizs et on va récuperer l'ancien texte
                        f = io.open("./../js/quizs.js", "r", encoding="utf-8")
                        # on va enlever la derniere ligne : le ']' et on va rajouter les nouvelles questions
                        txt = f.read()[:-2]
                        f.close()
                        # on va y ajouter la ligne du quiz
                        titre = q["titre"]
                        img = q.get("img", "images/bg3.jpg")
                        txt += f"\n\t{{'titre' : '{titre}', 'img': '{img}', 'idq': {idq}}}"
                        txt += "\n]"
                        # on va réécrire le fichier
                        f = io.open("./../js/quizs.js", "w", encoding="utf-8")
                        f.write(txt)
                        f.close()

                    # ajout de questions a un quiz
                    elif data["action"] == "ajout quiz":
                        # on recupere les données
                        idq = data["id_quiz"]
                        questions = data["questions"]
                        # on va ouvrir le fichier du quiz et on va récuperer l'ancien texte
                        f = io.open("./../quizs/q" + str(idq) + "/quiz.js", "r", encoding="utf-8")
                        # on va enlever la derniere ligne : le ']' et on va rajouter les nouvelles questions
                        txt = f.read()[:-2]
                        f.close()
                        # les questions seront deja en format js, il ne reste plus qu'a les ajouter au fichier
                        for q in questions:
                            txt += "\n\t" + q
                        txt += "\n]"
                        # on enregistre le fichier du quiz
                        f = io.open("./../quizs/q" + str(idq) + "/quiz.js", "w", encoding="utf-8")
                        f.write(txt)
                        f.close()

                if error == 1:
                    self.log("unsupported event: "+str(data))
        finally:
            await self.unregister(websocket)


    ################################## FONCTION DU LANCEMENT DU SERVER ##################################
    # C'est la fonction qui fait que le serveur est lancé 

    def main(self):
        """Fonction de lancement du serveur

        Auteur: Nathan
        """
        print("Server starting...")
        self.start_server = websockets.serve(self.main_server, self.IP, self.PORT)

        print("Server started.")
        asyncio.get_event_loop().run_until_complete(self.start_server)
        asyncio.get_event_loop().run_forever()


if __name__ == "__main__":
    print("creating server...")
    server=Server()
    print("Launching server...")
    server.main()
