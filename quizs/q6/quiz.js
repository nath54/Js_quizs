
var q={type:"",question:"",reponses:[],br:0};

/*

EXEMPLES : 

var q1={type:"qcu",question:"Quand nait l`Assemblée Nationale ?",reponses:["le 16 juin 1789","le 17 juin 1789","le 18 juin 1789"],br:"le 17 juin 1789"};
var q18={type:"dat",question:"Quand Louis XVI meurt-il ?",reponses:[1785,1815],br:["21","janvier","1793"]};
var q3={type:"inp",question:"Définition de PIB",reponses:[],br:"Somme des richesses produites dans un pays et en une année donnée"};
*/

var q1={type:"qcu",question:"Que connait l`économie mondiale en 1924",reponses:["Une phase de croissance","Une phase de décroissance","Une phase constante"],br:"Une phase de croissance"};
var q2={type:"qcu",question:"Quel est le pays qui a une phase de prospérité spectaculaire à partir de 1924 ?",reponses:["La Chine","Les USA","L`Allemagne"],br:"Les USA"};
var q3={type:"qcu",question:"Quelle est la cause du Krach Boursier de 1929 ?",reponses:["Les banques ne voulaient pas preter","Il y avait un fort chomage","Les banques pretaient beaucoup"],br:"Les banques pretaient beaucoup"};
var q4={type:"dat",question:"Quand a eu lieu le Krach Boursier ?",reponses:[1914,1945],br:["octobre","1929"]};
var q5={type:"qcu",question:"Qu`est-ce qu`entraine le Krach Boursier ?",reponses:["Une grande dépression","Les banques veulent preter plus","Une entraide entre les pays"],br:"Une grande dépression"};
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
var q18={type:"qcu",question:"Que deviennent les USA grâce à FD Roosvelt ?",reponses:["Un Etat Laïque","Un Etat Exeptionnel","Un Etat Providence","Un Etat Capitaliste"],br:"Un Etat Providence"};
var q19={type:"qcu",question:"Quel est le bilan du New Deal ?",reponses:["Une agravation de la crise mais une amélioration du moral de la population","Une amélioration de la crise mais une diminution du moral de la population","Un bilan mitigé mais une amélioration du moral de la population","Un bilan exceptionnel et une amélioration du moral de la population"],br:"Un bilan mitigé mais une amélioration du moral de la population"};
var q20={type:"qcu",question:"Quel était le gouvernement en France après la 1ere guerre mondiale ?",reponses:["La 2nd République","La 3eme République","La 4eme République"],br:"La 3eme République"};
var q21={type:"dat",question:"Quand est-ce que la France est touchés par la crise ?",reponses:[1914,1945],br:["1932"]};
var q22={type:"dat",question:"Quand est-ce qu`il y a de fortes manifestations politiques à Paris ?",reponses:[1914,1945],br:["6","fevrier","1934"]};
var q23={type:"qcu",question:"Qui n`était pas dans le Front Populaire lors de sa formation ?",reponses:["Les radicaux","Les socialistes","Les communistes","Les antisocialistes"],br:"Les antisocialistes"};
var q24={type:"qcu",question:"Qui devient le président du conseil en février 1934 ?",reponses:["Léon Blum","Edouard Daladier","Maurice Taurez"],br:"Léon Blum"};
var q25={type:"qcu",question:"Quelle était l`une des mesures phares des accords de Matigon ?",reponses:["3 semaines de congés payés par ans","Le droit de grève","La semaine à 40 heures de travail"],br:"La semaine à 40 heures de travail"};
var q26={type:"qcu",question:"Est-ce que le Front Populaire reste longtemps au pouvoir ?",reponses:["Oui","Non"],br:"Non"};
var q27={type:"dat",question:"Quand a eu lieu la premiere révolution des Bolchéviques en Russie ?",reponses:[1914,1945],br:["fevrier","1917"]};
var q28={type:"dat",question:"Quand a eu lieu la seconde révolution des Bolchéviques en Russie ?",reponses:[1914,1945],br:["octobre","1917"]};
var q29={type:"qcu",question:"Qui était à la tete des Bolchéviques au début ?",reponses:["Lénine","Staline","Trotski"],br:"Lénine"};
var q30={type:"dat",question:"Quand se fini la guerre civile débutée par les révolutions de 1917 ?",reponses:[1914,1945],br:["1921"]};
var q31={type:"qcu",question:"Comment les Bolchéviques prennent le pouvoir ?",reponses:["Par un coup d`Etat","En gagnant des éléctions","L`ancient gouvernement leurs a laissé la place gentillement"],br:"Par un coup d`Etat"};
var q32={type:"qcu",question:"Est-ce qu`après 1917, le parti Communiste est le seul parti autorisé en Russie ?",reponses:["Oui","Non"],br:"Oui"};
var q33={type:"qcu",question:"Quelle est la police politique créée en Russie le 20 décembre 1918 ?",reponses:["La Guestapo","Les Koulaks","La Tchéka"],br:"La Tchéka"};
var q34={type:"dat",question:"Quand a été créée la Tchéka ?",reponses:[1914,1945],br:["decembre","1918"]};
var q35={type:"qcu",question:"Comment appelle t`on les camps d`internement et de concentration en Russie/URSS ?",reponses:["Les Ghettos","Les Koulaks","Les Goulags"],br:"Les Goulags"};
var q36={type:"dat",question:"Quand est-ce que la Russie devient l`URSS ?",reponses:[1914,1945],br:["1922"]};
var q37={type:"qcu",question:"Quelle était la situation de la Russie en 1921 ?",reponses:["Pays Riche","Pays Modeste","Pays Ruiné"],br:"Pays Ruiné"};
var q38={type:"qcu",question:"Pourquoi est-ce que Lénine ne met pas tout de suite le communisme en place ?",reponses:["Car la Russie était ruiné","Car il y avait trop d`opposition","Car trop de pression des pays voisins"],br:"Car la Russie était ruiné"};
var q39={type:"qcu",question:"Quelle politique est-ce que Lénine met en place pour sauver l`économie de la Russie/URSS ?",reponses:["Le Communisme","La collectivisation des terres","La Nouvelle Politique Economique (NEP)"],br:"La Nouvelle Politique Economique (NEP)"};
var q40={type:"qcu",question:"En quoi consistait la NEP ?",reponses:["Interdire les entreprises privées car elles réduisent l`économie nationale","Garder les entreprises privées pour retablir l`économie","Privatiser tous les secteurs afin que les entreprises fassent le plus de profit possible"],br:"Garder les entreprises privées pour retablir l`économie"};
var q41={type:"qcu",question:"Qui succède à Lénine ?",reponses:["Poutine","Trotski","Staline"],br:"Staline"};
var q42={type:"dat",question:"Quand meurt Lénine ?",reponses:[1914,1945],br:["1924"]};
var q43={type:"qcu",question:"Qui succède à Lénine ?",reponses:["Poutine","Trotski","Staline"],br:"Staline"};
var q44={type:"qcu",question:"Que fait Staline dès qu`il entre au pouvoir ?",reponses:["Il déclare la guerre à l`Allemagne","Il créée l`URSS","Il met fin à la NEP"],br:"Il met fin à la NEP"};
var q45={type:"qcu",question:"Quelle est la mesure fondatrice du Communisme de Staline ?",reponses:["La collectivitisation des terres","L`appauvrissement de la population","La Nouvelle Politique Economique"],br:"La collectivitisation des terres"};
var q46={type:"qcu",question:"Comment s`appellent les exploitations collectives agricoles en URSS ?",reponses:["Les Kolkhozes","Les Artels","Les Sovkhozes"],br:"Les Kolkhozes"};
var q47={type:"qcu",question:"Quel est le but de la collectivitisation des terres en URSS ?",reponses:["Appauvrir la population","Réduire les inégalités","Industrialiser l`agriculture"],br:"Industrialiser l`agriculture"};
var q48={type:"qcu",question:"Est-ce que la majorités des paysans étaient partisans de la collectivisation des terres ?",reponses:["Oui","Non"],br:"Non"};
var q49={type:"qcu",question:"Comment s`appellent les paysans opposés à la collectivisation des terres ?",reponses:["Les Kolkhozes","Les Koulaks","Les Solvkhozes"],br:"Les Koulaks"};
var q50={type:"dat",question:"Quand y a t`il une grande famine en URSS ?",reponses:[1914,1945],br:["1933"]};
var q51={type:"qcu",question:"Comment s`appelle la nouvelle police politique de Staline de 1934?",reponses:["Le NKVD","La Guestapo","La Tchéka","La Guérpéon"],br:"Le NKVD"};
var q52={type:"dat",question:"Quand est mise en place le NKVD ?",reponses:[1914,1945],br:["decembre","1934"]};
var q53={type:"qcu",question:"Quels est le prétexte de la grande terreur en URSS ?",reponses:["Les activités antisoviétiques","L`industrialisation de l`URSS","La pauvreté de la population"],br:"Les activités antisoviétiques"};
var q54={type:"qcu",question:"Qu`est-ce que le procès de Moscou ?",reponses:["Un procès contre les juifs","Les vieux Bolchéviques avouent leurs fautes et sont fusillés","Staline qui s`escuse des excès du NKVD"],br:"Les vieux Bolchéviques avouent leurs fautes et sont fusillés"};
var q55={type:"qcu",question:"Pourquoi l`Italie n`est pas contente après la 1ere guerre mondiale ?",reponses:["Ils ont des réparations à payer","Il y a une puissante crise économique","Elle n`a pas pu récupérer des territoires d`Autriche-Hongrie"],br:"Elle n`a pas pu récupérer des territoires d`Autriche-Hongrie"};
var q56={type:"qcu",question:"Que se passe t'il en Italie après la 1ere guerre mondiale ?",reponses:["Il y a de violentes manifestations paysannes et ouvrières","Il y a de violentes manifestations bourgoises"],br:"Il y a de violentes manifestations paysannes et ouvrières"};
var q57={type:"dat",question:"Quand est-ce que le roi Italien nomme Mussolini Président du Conseil ?",reponses:[1914,1945],br:["30","octobre","1922"]};
var q58={type:"dat",question:"Quand est-ce que Mussolini fait voter les lois fascitissimes ?",reponses:[1914,1945],br:["1925"]};
var q59={type:"dat",question:"Quand est-ce que l'Italie se raproche de l'Allemagne  ?",reponses:[1914,1945],br:["1936"]};
var q60={type:"dat",question:"Quand est-ce que la France impose le traité de Versailles aux Allemands ?",reponses:[1914,1945],br:["28","juin","1919"]};
var q61={type:"dat",question:"Quand est-ce que l'Allemagne va rentrer dans la Société des nations ?",reponses:[1914,1945],br:["1925"]};
var q62={type:"dat",question:"Quand est-ce qu'Hitler échoue lamentablement dans une tentative de coup d'Etat ?",reponses:[1914,1945],br:["1923"]};
var q63={type:"dat",question:"Quand est-ce qu'Hitler devient chancelier ?",reponses:[1914,1945],br:["30","janvier","1933"]};
var q64={type:"dat",question:"Quand est-ce qu'a eu lieu la nuit de cristal ?",reponses:[1914,1945],br:["9","novembre","1938"]};
var q65={type:"dat",question:"Quand est-ce qu'Hitler rétablit le service militaire ?",reponses:[1914,1945],br:["1935"]};
var q66={type:"dat",question:"Quand est-ce qu'Hitler remilitarise la Rhémanie ?",reponses:[1914,1945],br:["mars","1936"]};
var q67={type:"dat",question:"Quand a eu lieu la guerre civile en Espagne ?",reponses:[1914,1945],br:["1936"]};
var q68={type:"dat",question:"Quand est-ce qu'Hitler annexe l'Autriche ?",reponses:[1914,1945],br:["mars","1938"]};
var q69={type:"dat",question:"Quand a eu lieu la conférence de Munich ?",reponses:[1914,1945],br:["30","septembre","1938"]};
var q70={type:"dat",question:"Quand commence la 2nd guerre mondiale ?",reponses:[1914,1945],br:["1","septembre","1939"]};



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
	q43,
	q44,
	q45,
	q46,
	q47,
	q48,
	q49,
	q50,
	q51,
	q52,
	q53,
	q54,
	q55,
	q56,
	q57,
	q58,
	q59,
	q60,
	q61,
	q62,
	q63,
	q64,
	q65,
	q66,
	q67,
	q68,
	q69,
	q70
];
