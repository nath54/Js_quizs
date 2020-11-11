import asyncio
import json
import websockets
import os
import io



class Server():

    ################################## FONCTION D'INITIALISATION ##################################
    #C'est cette fonction qui est appelée dès qu'une instance de cette classe est créée

    def __init__(self):
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
    #Ce sont les autres fonction que je n'ai pas encoré classées/commentées

    async def log(self,message):
        assert isinstance(message, str)
        print("log : "+message)
        f=io.open(self.logfile,"a",encoding="utf-8")
        f.write(message)
        f.close()

    ################################## FONCTIONS DE (DE)CONNEXION DE CLIENT ##################################
    #Ce sont ces 2 fonctions qui gèrent la connexion et la deconnexion d'un client
    
    async def register(self,websocket):
        self.USERS.add(websocket)

    async def unregister(self,websocket):
        self.USERS.remove(websocket)

    ################################## FONCTION PRINCIPALE ##################################
    #C'EST CETTE FONCTION QUI EST APPELEE POUR UN CLIENT DES QU'IL Y EN A UN QUI SE CONNECTE

    async def main_server(self, websocket, path):
        # register(websocket) sends user_event() to websocket
        await self.register(websocket)
        try:
            async for message in websocket:
                error=0 #0=no errors , 1=unsupported event
                data = json.loads(message)
                if "action" in data.keys():

                    if data["action"] == "nouveau quiz":
                        num = os.listdir()
                        questions = data["questions"]
                        os.mkdir("./../quizs/")

                    elif data["action"] == "ajout quiz":
                        questions = data["questions"]

                if error==1:
                    self.log("unsupported event: "+str(data))
        finally:
            await self.unregister(websocket)


    ################################## FONCTION DU LANCEMENT DU SERVER ##################################
    #C'est la fonction qui fait que le serveur est lancé 

    def main(self):
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


