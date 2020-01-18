/////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////

var listeElements=[];
var points=0;
var nbqt=10;
var nbq=0;
var qsts=[];

/////////////////////////////////////////////////////////// FONCTIONS ///////////////////////////////////////////////////////////

function randomchoice(liste){
	var n=Math.random()*liste.length;
	return liste[ parseInt(n) ];
}

function isIn(liste,el){
	var isin=false;
	for(e of liste){
		if(e == el ){
			isin=true;
		}
	}
	return isin;
}

function nettoiePage(){
    listeElements=[];
    for( element of document.body.getChilds){
        document.body.removeChild( element );
    }
}

function pq(q){
	//nettoyage de la page
	for(e of listeElements ){
		document.body.removeChild(e);
	}
	listeElements=[];
	//création des éléments
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	document.body.appendChild(p1);
    listeElements.push( p1 );
    document.body.appendChild(p2);
    listeElements.push( p2 );
    var t=document.createElement("h1");
    t.innerHTML= q.question;
    document.body.appendChild(t);
    listeElements.push( t );
    var nb=1;
    for( r of q.reponses ){
         var b1=document.createElement("button");
         b1.innerHTML=r;
         //alert(b1.click);
         b1.setAttribute('onclick', "bb("+nb+");");
         b1.setAttribute("id","b"+nb);
         b1.setAttribute("class","button_reponse");
         document.body.appendChild(b1);
         listeElements.push( b1 );
         nb++;
     }
     document.getElementById("qe").value=q;
}

function ecran_fin(){
	//nettoyage de la page
	for(e of listeElements ){
		document.body.removeChild(e);
	}
	listeElements=[];
	//afichage
	var t1=document.createElement("p");
	t1.innerHTML="Le quiz est fini !";
	document.body.appendChild( t1 );
	listeElements.push( t1 );
	var t2=document.createElement("p");
	t2.innerHTML="Vous avez fait un score de "+points+" / "+nbqt;
	document.body.appendChild( t2 );
	listeElements.push( t2 );
	var s = points/nbqt;
	if( s > 0.75 ){
		var txt="c'est bien !";
		var st="color:rgb(0,255,0);";
	}
	else if( s > 0.45 ){
		var txt="c'est assez moyen !";
		var st="color:rgb(220,155,0);";
	}
	else{
		var txt="C'est mauvais !";
		var st="color:rgb(255,0,0);";
	}
	var t3=document.createElement("p");
	t3.innerHTML=txt;
	t3.style=st;
	document.body.appendChild( t3 );
	listeElements.push( t3 );
	var b1=document.createElement("button");
    b1.innerHTML="Refaire le quiz ( les questions peuvent etre differentes) ";
    b1.setAttribute('onclick', "redo();");
    b1.setAttribute("id","bredo");
    document.body.appendChild(b1);
    listeElements.push( b1 );
}

function makequestions(){
    qsts=[];
    while(qsts.length<nbqt){
	    //alert("2");
	    q=randomchoice(questions);
	    if( !(isIn(qsts,q) ) ){
	    	qsts.push( q );
	    }
    }
}

function redo(){
    makequestions();
	nbq=1;
	points=0;
	pq(qsts[nbq]);
}

function bb(num){
	var qq=document.getElementById("qe").value;
    var bt=document.getElementById("b"+num);
	if( qq.br == num ){
        points++;
        bt.setAttribute("style","background-color:green");
//        alert("Bonne réponse !");
    }
    else{
//        alert("erreur, la bonne réponse était : "+qq.reponses[qq.br-1]);
        bt.setAttribute("style","background-color:red");
        var bbt=document.getElementById("b"+qq.br);
        bbt.setAttribute("style","background-color:green");
    }
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    document.body.appendChild(nbt);
    listeElements.push(nbt);
}

function qsuiv(){
	nbq++;
	if( nbq >= nbqt){
		nbq=nbqt;
		ecran_fin();
	}
	else{
	    //alert(nbq);
	    document.getElementById("qe").value=qsts[nbq];
	    pq(qsts[nbq]);
	}
}


/////////////////////////////////////////////////////////// MAIN CODE ///////////////////////////////////////////////////////////


makequestions();

document.getElementById("qe").value=qsts[nbq];
pq(qsts[nbq]);

//alert("a");

