
function create_ligne(idl){
    /* Fonction qui ajoute les quizs au menu

    Auteur: Nathan
    */
    var ligne = document.createElement("div");
    ligne.setAttribute("id", idl);
    ligne.setAttribute("class", "row no-collapse-1");
    document.getElementById("quizs").appendChild(ligne);
}

/*
<section class="4u">
    <a href="#" class="image featured"><img src="images/pic01.jpg" alt=""></a>
    <div class="box">
        <p>QUIZ : Histoire 1ere : La révolution Francaise (33 questions au total)</p>
        <a href="quiz.html?quizjs=quizs/q1/quiz.js&titre=Quiz : La révolution Francaise" class="button button_s1">Faire le quiz</a>
    </div>
</section>
*/

function create_quiz(q, idl){
    /* Fonction qui ajoute un quiz au menu

    Auteur: Nathan
    */
    var quize = document.createElement("section");
    quize.setAttribute("class", "4u")
    //
    var ai = document.createElement("a");
    ai.setAttribute("href", "#");
    ai.setAttribute("class", "image featured");
    var ii = document.createElement("img");
    ii.setAttribute("src", q["img"]);
    ai.appendChild(ii);
    quize.appendChild(ai);
    //
    var divb = document.createElement("div");
    divb.setAttribute("class", "box");
    //
    var pp = document.createElement("p");
    pp.innerHTML = q["titre"];
    //
    var aa = document.createElement("a");
    aa.setAttribute("href", "quiz.html?quizjs=quizs/q"+q["idq"]+"/quiz.js&titre=" + q["titre"]);
    aa.setAttribute("class", "button button_s1");
    aa.innerHTML = "Faire le quiz !";
    //
    divb.appendChild(pp);
    divb.appendChild(aa);
    quize.appendChild(divb);
    //
    document.getElementById(idl).appendChild(quize);
    return quize;
}

function create_quizs(){
    /* Fonction qui ajoute les quizs au menu

    Auteur: Nathan
    */
    // initialisation des variables
    var ligne_actu = [];
    var nbl = 1;
    var id_ligne_actu = "ligne_questions_1"
    create_ligne(id_ligne_actu)
    // on parcours les quizs et on les ajoute au menu
    for(q of window.quizs_dispo){
        // on crée une nouvelle ligne quand une ligne est remplie
        if(ligne_actu.length >= 3){
            ligne_actu = [];
            nbl += 1;
            id_ligne_actu = "ligne_questions_" + nbl
            nl = create_ligne(id_ligne_actu)
        }
        // on y ajoute la question
        quize = create_quiz(q, id_ligne_actu);
        ligne_actu.push(quize);
    }
}
