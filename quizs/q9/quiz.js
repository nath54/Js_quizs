
var q={type:"",question:"",reponses:[],br:0};

//var q={type:"qcu",question:"Question a choix unique ?",reponses:["Reponse 1","Reponse 2","Reponse 3","Reponse 4","Reponse autant qu'on veut"],br:"La bonne réponse ici"};
//var q={type:"dat",question:"Question de date ?",reponses:[2020,2021],br:["26","octobre","2020"]};
//var q={type:"inp",question:"Une définition",reponses:[],br:"Une définition se comporte ainsi : Le texte est affiché à l'écran, l'utilisateur a autant de temps qu'il veut pour l'apprendre, ensuite, il doit attendre 10 ou 15 secondes, puis doit réécrire la définition mot pour mot."};
//var q={type:"qcm",question:"Question a choix multiples ?",reponses:["Choix 1","Choix 2","Choix 3","Autant de choix qu'on veut"],br:["Bon choix 1","Bon choix 2"]};
//var q={type:"voc",question:"Traduire mot en langue",reponses:[],br:["Traduction dans une autre langue 2","On a le droit aux synonymes"]}

var questions=[
    {type:"qcm",question:"Grâce à quoi est-ce que la Terre a obtenu sont atmosphère primitive ?",reponses:["Grâce au dégazage du magma","Grâce à l\'activité volcanique","Grâce aux météorites qui bombardent la Terre","Grâce aux premiers êtres vivants qui transformaient le CO2 en O2"],br:["Grâce au dégazage du magma","Grâce à l'activité volcanique","Grâce aux météorites qui bombardent la Terre"]},
    {type:"voc",question:"Comment appelle-t-on les formations rocheuses constituées par une alternance de couches rocheuses (souvent calcaire) et de couches de matière organique ?",image:"quizs/q9/q2.jpg",reponses:[],br:["stromatolites","stromatolite"]},
    {type:"qcu",question:"Que retrouve t-on dans des stromatolites ?",reponses:["Des cyanobactéries","Des chondrites","De l'hématite"],br:"Des cyanobactéries"},
    {type:"qcu",question:"Est-ce que les cyanobactéries ont créé du dioxygène grâce à la photosynthèse ?",reponses:["Oui","Non"],br:"Oui"},    
    {type:"qcu",question:"A quand remonte les 1ere traces de stromatolites ?",reponses:["1.5 Ga","2.2 Ga","3.6 Ga"],br:"3.6 Ga"},
    {type:"qcu",question:"Comment est-ce que ce forment les \"sols rouges\" ?",reponses:["Le fer 2 présent dans les sols s\'oxide à cause de du dioxygène présent dans l\'air","Le sol devient rouge à cause du manque d\'oxygène dans l\'atmosphère","Les parties de la croute terrestre contenant du silice (O2Si) ont perdus leurs atomes d\'oxygène, ce qui leur a donné une couleur rouge"],br:"Le fer 2 présent dans les sols s'oxide à cause de du dioxygène présent dans l'air"},
];
