
var q={type:"",question:"",reponses:[],br:0};

/*

EXEMPLES : 

var q1={type:"qcu",question:"Quand nait l`Assemblée Nationale ?",reponses:["le 16 juin 1789","le 17 juin 1789","le 18 juin 1789"],br:"le 17 juin 1789"};
var q18={type:"dat",question:"Quand Louis XVI meurt-il ?",reponses:[1785,1815],br:["21","janvier","1793"]};
var q3={type:"inp",question:"Définition de PIB",reponses:[],br:"Somme des richesses produites dans un pays et en une année donnée"};
*/

var q1={type:"qcu",question:"Que connait l`économie mondiale en 1924",reponses:["Une phase de croissance","Une phase de décroissance","Une phase constante"],br:"Une phase de croissance"};
var q2={type:"qcu",question:"Quel est le pays qui a une phase de prospérité spectaculaire à partir de 1924 ?",reponses:["La Chine","Les USA","L`Allemagne"],br:"Les USA"};
var q3={type:"qcu",question:"Quelle est la cause du Krach Boursier de 1929 ?",reponses:["Les banques ne voulaient pas prêter","Il y avait un fort chomage","Les banques prêtaient beaucoup"],br:"les banques prêtaient beaucoup"};
var q4={type:"dat",question:"Quand a eu lieu le Krach Boursier ?",reponses:[1914,1945],br:["octobre","1929"]};
var q5={type:"qcu",question:"Qu`est-ce qu`entraine le Krach Boursier ?",reponses:["Une grande dépression","Les banques veulent prêter plus","Une entraide entre les pays"],br:"Une grande dépression"};
var q6={type:"qcu",question:"Quelle est l`ampleur de la crise économique suite au Krach Boursier ?",reponses:["Régionale","Nationale","Continentale","Mondiale"],br:"Mondiale"};
var q7={type:"qcu",question:"Il y a une crise économique mondiale car ?",reponses:["Les USA investissent plus","Les USA investissent moins","Les USA retirent leurs investissements"],br:"Les USA retirent leurs investissements"};
var q8={type:"dat",question:"Quand est-ce que l`Allemagne devient l`un des pays les plus touchés par la crise ?",reponses:[1914,1945],br:["1930"]};
var q9={type:"qcu",question:"Comment se passe la crise pour les pays exportateurs de matières premiere ?",reponses:["Ils s`en sortent bien","Cela augmente leurs exportations","Ils sont durement touchés"],br:"Ils sont durement touchés"};
var q10={type:"qcu",question:"Comment réagissent les gouvernements au début de la crise ?",reponses:["Ils menent des politiques de déflation","Ils menent des politiques d`inflation","Ils ne font rien"],br:"Ils menent des politiques de déflation"};
var q11={type:"qcu",question:"Quels sont les conséquences des politiques de déflation ?",reponses:["Elles apauvrissent la population","Elles enrichissent la population","Elles n`ont aucuns résultats"],br:"Elles apauvrissent la population"};
var q12={type:"qcu",question:"Que n`a pas dit H.Hoover ?",reponses:["Les Américains sont aujourd`hui plus près qu`aucune autre nation de vaincre la pauvreté","Mon objectif, c`est un poulet dans chaque casserole, et une voiture dans chaque garage","Venez, achetez, empruntez, c`est gratuit !"],br:"Venez, achetez, empruntez, c`est gratuit !"};
var q13={type:"dat",question:"Quelle etait la date des élections opposant H.Hoover à FD Roosvelt ?",reponses:[1914,1945],br:["1932"]};
var q14={type:"qcu",question:"Qui a remporté les elections de 1932 ?",reponses:["Franklin Delano Roosvelt","Herbert Hoover","Calvin Coolidge"],br:"Franklin Delano Roosvelt"};
var q15={type:"qcu",question:"Que propose FD Roosvelt lors de son premier mandat ?",reponses:["The New Deal","The Last Deal","The Best Deal"],br:"The New Deal"};
var q16={type:"qcu",question:"Est-ce que FD Roosvelt met en place de Grands Travaux ?",reponses:["Oui","Non"],br:"Oui"};
var q17={type:"qcu",question:"Pour FD Roosvelt, qu`est-ce qu`une politique moderne ?",reponses:["Une politique de déflation","Une politique de persécution","Une politique d`importation","Une politique de communication"],br:"Une politique de communication"};
var q18={type:"qcu",question:"Que devient les USA grâce à FD Roosvelt ?",reponses:["Un Etat Laïque","Un Etat Exeptionnel","Un Etat Providence","Un Etat Capitaliste"],br:"Un Etat Providence"};
var q19={type:"qcu",question:"Quel est le bilan du New Deal ?",reponses:["Une agravation de la crise mais une amélioration du moral de la population","Une amélioration de la crise mais une diminution du moral de la population","Un bilan mitigé mais une amélioration du moral de la population","Un bilan exceptionnel et une amélioration du moral de la population"],br:"Un bilan mitigé mais une amélioration du moral de la population"};
var q20={type:"qcu",question:"Quel était le gouvernement en France après la 1ere guerre mondiale ?",reponses:["La 2nd République","La 3eme République","La 4eme République"],br:"La 3eme République"};
var q21={type:"dat",question:"Quand est-ce que la France est touchés par la crise ?",reponses:[1914,1945],br:["1932"]};
var q22={type:"dat",question:"Quand est-ce qu`il y a de fortes manifestations politiques à Paris ?",reponses:[1914,1945],br:["6","février","1934"]};
var q23={type:"qcu",question:"Qui n`était pas dans le Front Populaire lors de sa formation ?",reponses:["Les radicaux","Les socialistes","Les communistes","Les antisocialistes"],br:"Les antisocialistes"};
var q24={type:"qcu",question:"Qui devient le président du conseil en février 1934 ?",reponses:["Léon Blum","Edouard Daladier","Maurice Taurez"],br:"Léon Blum"};
var q25={type:"qcu",question:"Quelle était l`une des mesures phares des accords de Matigon ?",reponses:["3 semaines de congés payés par ans","Le droit de grève","La semaine à 40 heures de travail"],br:"La semaine à 40 heures de travail"};
var q26={type:"qcu",question:"Est-ce que le Front Populaire reste longtemps au pouvoir ?",reponses:["Oui","Non"],br:"Non"};
var q27={type:"dat",question:"Quand a eu lieu la premiere révolution des Bolchéviques en Russie ?",reponses:[1914,1945],br:["février","1917"]};
var q28={type:"dat",question:"Quand a eu lieu la seconde révolution des Bolchéviques en Russie ?",reponses:[1914,1945],br:["octobre","1917"]};
var q29={type:"qcu",question:"Qui était à la tête des Bolchéviques au début ?",reponses:["Lénine","Staline","Trotski"],br:"Lénine"};
var q30={type:"dat",question:"Quand se fini la guerre civile débutée par les révolutions de 1917 ?",reponses:[1914,1945],br:["1921"]};
var q31={type:"qcu",question:"Comment les Bolchéviques prennent le pouvoir ?",reponses:["Par un coup d'Etat","En gagnant des éléctions","L'ancient gouvernement leurs a laissé la place gentillement"],br:"Par un coup d'Etat"};
var q32={type:"qcu",question:"Est-ce qu'après 1917, le parti Communiste est le seul parti autorisé en Russie ?",reponses:["Oui","Non"],br:"Oui"};
var q33={type:"qcu",question:"Quelle est la police politique créée en Russie le 20 décembre 1918 ?",reponses:["La Guestapo","Les Koulaks","La Tchéka"],br:"La Tchéka"};
var q34={type:"dat",question:"Quand a été créée la Tchéka ?",reponses:[1914,1945],br:["decembre","1918"]};
var q35={type:"qcu",question:"Comment appelle t'on les camps d'internement et de concentration en Russie/URSS ?",reponses:["Les Ghettos","Les Koulaks","Les Goulags"],br:"Les Goulags"};
var q36={type:"dat",question:"Quand est-ce que la Russie devient l'URSS ?",reponses:[1914,1945],br:["1922"]};
var q37={type:"qcu",question:"Quelle était la situation de la Russie en 1921 ?",reponses:["Pays Riche","Pays Modeste","Pays Ruiné"],br:"Pays Ruiné"};
var q38={type:"qcu",question:"Pourquoi est-ce que Lénine ne met pas tout de suite le communisme en place ?",reponses:["Car la Russie était ruiné","Car il y avait trop d'opposition","Car trop de pression des pays voisins"],br:"Car la Russie était ruiné"};
var q39={type:"qcu",question:"Quelle politique est-ce que Lénine met en place pour sauver l'économie de la Russie/URSS ?",reponses:["Le Communisme","La collectivisation des terres","La Nouvelle Politique Economique (NEP)"],br:"La Nouvelle Politique Economique (NEP)"};
var q40={type:"qcu",question:"En quoi consistait la NEP ?",reponses:["Interdire les entreprises privées car elles réduisent l'économie nationale","Garder les entreprises privées pour retablir l'économie","Privatiser tous les secteurs afin que les entreprises fassent le plus de profit possible"],br:"Garder les entreprises privées pour retablir l'économie"};
var q41={type:"qcu",question:"Qui succède à Lénine ?",reponses:["Poutine","Trotski","Staline"],br:"Staline"};
var q42={type:"dat",question:"Quand meurt Lénine ?",reponses:[1914,1945],br:["1924"]};
var q43={type:"qcu",question:"Qui succède à Lénine ?",reponses:["Poutine","Trotski","Staline"],br:"Staline"};
var q44={type:"qcu",question:"Que fait Staline dès qu'il entre au pouvoir ?",reponses:["Il déclare la guerre à l'Allemagne","Il créée l'URSS","Il met fin à la NEP"],br:"Staline"};

var questions=[
	q1,
	q2,
	q3,
	q4,
	q5,
	q6,
	q7,
	q8,
	q9,
	q10,
	q11,
	q12,
	q13,
	q14,
	q15,
	q16,
	q17,
	q18,
	q19,
	q20,
	q21,
	q22,
	q23,
	q24,
	q25,
	q26,
	q27,
	q28,
	q29,
	q30,
	q31,
	q32,
	q35,
	q36,
	q37,
	q38,
	q39,
	q40,
	q41,
	q42,
	q43
];
