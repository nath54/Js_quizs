
var q={type:"",question:"",reponses:[],br:0},

/*

EXEMPLES : 

{type:"qcu",question:"Quand nait l'Assemblée Nationale ?",reponses:["le 16 juin 1789","le 17 juin 1789","le 18 juin 1789"],br:"le 17 juin 1789"},
{type:"dat",question:"Quand Louis XVI meurt-il ?",reponses:[1785,1815],br:["21","janvier","1793"]},
{type:"inp",question:"Définition de PIB",reponses:[],br:"Somme des richesses produites dans un pays et en une année donnée"},
*/

var questions=[
	{type:"qcu",question:"Que vaut ce calcul ?",image:"quizs/q5/q1.svg",reponses:["2Re(z)","2Im(z)","2z"],br:"2Re(z)"},
	{type:"qcu",question:"Que vaut ce calcul ?",image:"quizs/q5/q2.svg",reponses:["2Im(z)","2Re(z)","2z"],br:"2Im(z)"},
	{type:"qcu",question:"Que vaut i² ?",reponses:["1","-1","2"],br:"-1"},
	{type:"qcu",question:"z est un nombre complexe de la forme a+ib, où a et b sont des réels. Que représente a ?",reponses:["La partie réelle du nombre","La partie imaginaire du nombre"],br:"La partie réelle du nombre"},
	{type:"qcu",question:"z est un nombre complexe de la forme a+ib, où a et b sont des réels. Que représente b ?",reponses:["La partie réelle du nombre","La partie imaginaire du nombre"],br:"La partie imaginaire du nombre"},
	{type:"qcu",question:"Si Re(z) = 0, que dit-on de z ?",reponses:["z est un imaginaire pur","z est un réel pur","z est un imaginaire complexe","z est un réel complexe"],br:"z est un imaginaire pur"},
	{type:"inp",question:"L'inverse d'un nombre complexe",reponses:[],br:"L'inverse d'un nombre complexe non nul z est le nombre complexe z' tel que z x z'=1"},
	{type:"qcu",question:"Quel est le nombre conjugué du nombre complexe z=a+ib ?",reponses:["a-ib","-a+ib","-a-ib"],br:"a-ib"},
]