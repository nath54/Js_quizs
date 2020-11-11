
var q={type:"",question:"",reponses:[],br:0},

/*

EXEMPLES : 

{type:"qcu",question:"Quand nait l'Assemblée Nationale ?",reponses:["le 16 juin 1789","le 17 juin 1789","le 18 juin 1789"],br:"le 17 juin 1789"},
{type:"dat",question:"Quand Louis XVI meurt-il ?",reponses:[1785,1815],br:["21","janvier","1793"]},
{type:"inp",question:"Définition de PIB",reponses:[],br:"Somme des richesses produites dans un pays et en une année donnée"},
*/

var questions=[
	{type:"dat",question:"Quand est-ce que la seconde guerre mondiale a commencée ?",reponses:[1914,1983],br:["1","septembre","1939"]},
	{type:"dat",question:"Quand est-ce que la seconde guerre mondiale s'est-elle terminée ?",reponses:[1914,1983],br:["2","septembre","1945"]},
	{type:"qcu",question:"Comment se nomment l\'Allemagne et ses alliés lors de la 2nd guerre mondiale ?",reponses:["Forces of the Haches","les forces de l\'Axe","Les forts des Axes"],br:"les forces de l\'Axe"},
	{type:"qcu",question:"Comment se passe le début de la 2nd guerre mondiale pour l'Allemagne et ses alliés ?",reponses:["Ils soumettent rapidement l'Europe","Ils se font soumettre rapidement par leurs ennemis","Personne ne prend le dessus au début de la guerre"],br:"Ils soumettent rapidement l'Europe"},
	{type:"qcu",question:"Qui poursuit seul la lutte pendant la seconde guerre mondiale lorque ses alliés sont soumis ?",reponses:["L'Allemagne","La France","le Royaume-Uni"],br:"le Royaume-Uni"},
	{type:"dat",question:"Quand est-ce que Hitler attaque l'URSS",reponses:[1914,1983],br:["22","juin","1941"]},
	{type:"qcu",question:"Qu'est-ce que l\’opération Barbarossa ?",reponses:["L\'invasion par le 3e Reich de la France","L'invasion par le 3e Reich de l'URSS","Un nom de code pour l\'extermination de la population juive."],br:"L\'invasion par le 3e Reich de l'URSS"},
	{type:"qcu",question:"Comment est-ce que les Etats-Unis sont rentrés en guerre pendant la Seconde Guerre mondiale ?",reponses:["Ils ont subis une attaque surprise des forces aéronavales japonaise à Pearl Harbor","Hitler à Provoqué Franklin Roosevelt ( Président des Etats-Unis pendant la 2nd Guerre Mondiale ) lors de l'un de ses discours.","L'Allemagne a lancé une offensive surprise en Amérique, et a infligé de lourds dégats"],br:"Ils ont subis une attaque surprise des forces aéronavales japonaise à Pearl Harbor"},
	{type:"dat",question:"Quand est-ce que les Etats-Unis rentrent en guerre ?",reponses:[1914,1983],br:["8","décembre","1941"]},
]