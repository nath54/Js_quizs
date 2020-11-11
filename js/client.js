
function create_questions(){
    
}

function cliente(){
    var ip = document.getElementById("inp_ip")
    var port = document.getElementById("inp_port")

    var websocket = new WebSocket("ws://"+ip+":"+port+"/");
    websocket.onerror=cantconnect;
    console.log(websocket);

    function randchoice(liste){ return liste[parseInt(Math.random()*liste.length)]; }

    websocket.onmessage = function (event) {
        data = JSON.parse(event.data);
        switch (data.type) {
            case "quiz successed":
                alert("Votre quiz a bien été créé, veuillez attendre quelques secondes et réactualiser la page de temps en temps, et normalement le nouveau quiz devrait arriver")
                websocket.close()
                window.location.href="index.html";
            case "quiz failed":
                alert("Il y a eu une erreur lors de la création de votre quiz, ")
                websocket.close()
                window.location.href="index.html";
            default:
                console.error("unsupported event", data);
        }
    };
}

function cantconnect(){
    alert("Error : can't connect to the server");
    window.location.href="index.html";
}
