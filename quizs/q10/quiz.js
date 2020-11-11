
var q={type:"",question:"",reponses:[],br:0};

//var q1={type:"qcu",question:"Question a choix unique ?",reponses:["Reponse 1","Reponse 2","Reponse 3","Reponse 4","Reponse autant qu'on veut"],br:"La bonne réponse ici"};
//var q2={type:"dat",question:"Question de date ?",reponses:[2020,2021],br:["26","octobre","2020"]};
//var q3={type:"inp",question:"Une définition",reponses:[],br:"Une définition se comporte ainsi : Le texte est affiché à l'écran, l'utilisateur a autant de temps qu'il veut pour l'apprendre, ensuite, il doit attendre 10 ou 15 secondes, puis doit réécrire la définition mot pour mot."};
//var q4={type:"qcm",question:"Question a choix multiples ?",reponses:["Choix 1","Choix 2","Choix 3","Autant de choix qu'on veut"],br:["Bon choix 1","Bon choix 2"]};
//var q5={type:"voc",question:"Traduire mot en langue",reponses:[],br:["Traduction dans une autre langue 2","On a le droit aux synonymes"]}

var questions=[
    {type:"qcu",question:"Comment appelle-t-on l\'énergie prélevée directement dans la nature",reponses:["L\'énergie primaire","L\'énergie secondaire","L\'énergie naturelle"],br:"L\'énergie primaire"},
    {type:"qcu",question:"Comment appelle-t-on l\'énergie que l\'être humain a convertie",reponses:["L\'énergie primaire","L\'énergie secondaire","L\'énergie tertiaire"],br:"L\'énergie secondaire"},
    {type:"inp",question:"Quelle est la définition d'une ressource non renouvelable ?",reponses:[],br:"Une ressource dont l'exploitation et la consommation se fait nettement plus vite que le temps requis à la ressource pour ce regénérer"},
    {type:"qcu",question:"Quelle est la bonne formule qui lie l'énergie (en joule), la puissance(en W) et le temps dt (en secondes) ?",reponses:["E = P / dt","dt = P / E","P = E / dt"],br:"P = E / dt"},
    {type:"qcm",question:"Quelles unités sont des unités d'énergie ?",reponses:["La tonne équivalent pétrole (tep)","Le Watt (W)","Le joule (J)","Le kilowattheure (kWh)"],br:["La tonne équivalent pétrole (tep)","Le joule (J)","Le kilowattheure (kWh)"]},
    {type:"qcu",question:"Vrai ou Faux ? Les énergies primaires sont disponibles sous formes de stocks ou de flux",reponses:["Vrai","Faux"],br:"Vrai"},
    {type:"qcu",question:"Vrai ou Faux ? La France est un grand pays exportateur de matières premières",reponses:["Vrai","Faux"],br:"Faux"},
    {type:"qcu",question:"Vrai ou Faux ? L'énergie nucléaire est une énergie renouvelable",reponses:["Vrai","Faux"],br:"Faux"},
    {type:"qcu",question:"Vrai ou Faux ? La consommation est équitablement répartie dans le monde",reponses:["Vrai","Faux"],br:"Faux"},
    {type:"qcu",question:"La combustion complète du méthane, principal constituant du gaz naturel , peut être modélisée par la réaction : ",reponses:["CH4 + 2 O2 -> CO2 + 2 H2O","CH4 + 2 O2 -> CO2 + H2O","CH4 + O2 -> CO2 + H2O","CH4 + O2 -> CO2 + 2 H2O"],br:"CH4 + 2 O2 -> CO2 + 2 H2O"},
    {type:"qcm",question:"Indiquer les gazs à effet de serre parmis les suivant :",reponses:["Le dioxyde de carbonne","le monoxyde de dihidrogène","Le méthane","Le protoxyde d'azote"],br:["Le dioxyde de carbonne","le monoxyde de dihidrogène","Le méthane","Le protoxyde d'azote"]},
    {type:"qcu",question:"Vrai ou Faux ? La pollution atmosphérique est d'origine naturelle",reponses:["Vrai","Faux"],br:"Faux"},
    {type:"qcu",question:"Vrai ou Faux ? Une combustion complète n'emet pas de micro-particules",reponses:["Vrai","Faux"],br:"Vrai"},
    {type:"qcu",question:"Vrai ou Faux ? Une combustion complète emet du CO2",reponses:["Vrai","Faux"],br:"Vrai"},
]