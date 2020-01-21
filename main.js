/////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////
var lmois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
var listeElements=[];
var points=0;
var nbqt=10;
var nbq=0;
var qsts=[];
var dt=new Date();
var time=dt.getTime();

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
    if(q.type=="qcu"){
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
     }
     else if(q.type=="dat"){
         var s1=document.createElement("select");
         s1.setAttribute("id","s1");
         var so1=document.createElement("optgroup");
         so1.innerHTML="jours";
         for(x=1;x<31;x++){
             o=document.createElement("option");
             o.innerHTML=""+x;
             so1.appendChild(o);
         }
         var s2=document.createElement("select");
         s2.setAttribute("id","s2");
         var so2=document.createElement("optgroup");
         so2.innerHTML="mois";
         for(x=0;x<lmois.length;x++){
             o=document.createElement("option");
             o.innerHTML=""+lmois[x];
             so2.appendChild(o);
         }
         var s3=document.createElement("select");
         s3.setAttribute("id","s3");
         var so3=document.createElement("optgroup");
         so3.innerHTML="annee";
         for(x=q.reponses[0];x<q.reponses[1];x++){
             o=document.createElement("option");
             o.innerHTML=""+x;
             o.setAttribute("onClick","update_dat();");
             so3.appendChild(o);
         }
         s1.appendChild(so1);
         s2.appendChild(so2);
         s3.appendChild(so3);
         s1.setAttribute("onClick","update_dat();");
         s2.setAttribute("onClick","update_dat();");
         s3.setAttribute("onClick","update_dat();");
         document.body.appendChild(s1);
         document.body.appendChild(s2);
         document.body.appendChild(s3);
         listeElements.push(s1);
         listeElements.push(s2);
         listeElements.push(s3);
         var ppp=document.createElement("p");
         ppp.innerHTML=""
         ppp.setAttribute("id","pd");
         document.body.appendChild(ppp);
         listeElements.push(ppp);
         var nbt=document.createElement("button");
         nbt.innerHTML="confirmer";
         nbt.setAttribute("onClick","check_date();");
         nbt.setAttribute("id","qsuiv");
         document.body.appendChild(nbt);
         listeElements.push(nbt);
     }
     else if(q.type=="inp"){
         var t=document.createElement("h2");
         t.innerHTML="Retenez bien, Vous devrez recopier la définition mot pour mot";
         var p=document.createElement("p");
         p.innerHTML=q.br;
         var bt=document.createElement("button");
         bt.setAttribute("onClick","inpet2();");
         bt.innerHTML="C'est bon, je connais !";
         bt.setAttribute("class","button_reponse");
         document.body.appendChild( t );
         document.body.appendChild( p );
         document.body.appendChild( bt );
         listeElements.push(t);
         listeElements.push(p);
         listeElements.push(bt);
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
    while(qsts.length<nbqt && qsts.length<questions.length){
	    //alert("2");
	    q=randomchoice(questions);
	    if( !(isIn(qsts,q) ) ){
	    	qsts.push( q );
	    }
    }
    nbqt=qsts.length;
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

function update_dat(){
	var pd=document.getElementById("pd");
	var jour=document.getElementById("s1").value;
	var moi=document.getElementById("s2").value;
	var an=document.getElementById("s3").value;
	pd.innerHTML="Le "+jour+" "+moi+" "+an;
}

function check_date(){
	var jour=document.getElementById("s1").value;
	var moi=document.getElementById("s2").value;
	var an=document.getElementById("s3").value;
	var qq=document.getElementById("qe").value;
    var rep=[jour,moi,an];
    var b=qq.br;
    //alert(b[0]+'_'+b[1]+'_'+b[2]);
    //alert(rep[0]+'_'+rep[1]+'_'+rep[2]);
	var cond=b[0]+'_'+b[1]+'_'+b[2]==rep[0]+'_'+rep[1]+'_'+rep[2]
	//alert(cond);
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
    t.innerHTML= qq.question;
    document.body.appendChild(t);
    listeElements.push( t );
	
    if( cond ){
        points+=1;
        var tt=document.createElement("h2");
        tt.innerHTML= "Vous avez juste !";
        tt.setAttribute("style","color:green;");
        document.body.appendChild(tt);
        listeElements.push( tt );
    }
    else{
        var tt=document.createElement("h2");
        tt.innerHTML= "Vous avez faux ! La bonne réponse était : le "+qq.br[0]+" "+qq.br[1]+" "+qq.br[2];
        tt.setAttribute("style","color:red;");
        document.body.appendChild(tt);
        listeElements.push( tt );
    }
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    document.body.appendChild(nbt);
    listeElements.push(nbt);
}

function inpet2(){
	var tp=5
	//nettoyage de la page
	for(e of listeElements ){
		document.body.removeChild(e);
	}
	listeElements=[];
	var t=document.createElement("h2");
    t.innerHTML="Attendez "+tp+" sec";
    var bt=document.createElement("button");
    bt.setAttribute("onClick","inpet3("+tp+");");  //en sec
    bt.setAttribute("class","button_reponse");
    bt.innerHTML="Continuer";
    document.body.appendChild( t );
    document.body.appendChild( bt );
    listeElements.push(t);
    listeElements.push(bt);
    var dt=new Date();
    time=dt.getTime();
}

function inpet3(tp){
	var dt=new Date();
	if( dt.getTime()-time >= tp*1000 ){
		inpet4();
	}
	else{
		alert("il reste encore "+(tp-(dt.getTime()-time)/1000)+" sec");
	}
}

function inpet4(){
	//nettoyage de la page
	for(e of listeElements ){
		document.body.removeChild(e);
	}
	listeElements=[];
	//
	var qq=document.getElementById("qe").value;
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	document.body.appendChild(p1);
    listeElements.push( p1 );
    document.body.appendChild(p2);
    listeElements.push( p2 );
    var t=document.createElement("h1");
    t.innerHTML= qq.question;
    alert(qq.question);
	var tt=document.createElement("h2");
    tt.innerHTML="Recopiez la définition mot pour mot";
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("id","input");
    inp.value="";
    var nbt=document.createElement("button");
    nbt.innerHTML="verifier";
    nbt.setAttribute("onClick","check_inp();");
    nbt.setAttribute("class","button_reponse");
    document.body.appendChild(t);
    document.body.appendChild(tt);
    document.body.appendChild(inp);
    document.body.appendChild(nbt);
    listeElements.push(nbt);
    listeElements.push( t );
    listeElements.push( inp );
}

function traiteInp(txt){
	var r="";
	for(l of txt.split('')){
		ll=l.toLowerCase();
		if( ["ê","é","è","ë"].includes(ll) ){
			ll="e";
	    }
	    else if( ["à","â","á","ä"].includes(ll) ){
			ll="a";
	    }
	    else if( ["ï","î","í","ī"].includes(ll) ){
			ll="i";
	    }
		else if( ["\t"," ","\n","\r"].includes(ll) ){
		    ll="";
		}
	    r+=ll;
	}
	return r;
}

function check_inp(){
	var rep=document.getElementById("input").value;
	var qq=document.getElementById("qe").value;
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
    var p=document.createElement("p");
    //
    
    var tt=document.createElement("h2");
    alert(traiteInp(rep));
    alert(traiteInp(qq.br));
    if(traiteInp(rep)==traiteInp(qq.br)){
        tt.innerHTML="Vous avez juste !";
        tt.setAttribute("style","color:green;");
        points+=1;
    }
    else{
        tt.innerHTML="Vous avez faux ! Dommage, ce n'était pas facile, mais vous réussirerez mieux la prochaine fois ;)";
        tt.setAttribute("style","color:red;");
        p.innerHTML="Par contre, il ne faux jamais abandoner, sinon, vous ne réussirez jamais.";
    }
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    document.body.appendChild(nbt);
    document.body.appendChild( tt );
    document.body.appendChild( p );
    listeElements.push(nbt);
    listeElements.push(tt);
    listeElements.push(p);
}

/////////////////////////////////////////////////////////// MAIN CODE ///////////////////////////////////////////////////////////


makequestions();

document.getElementById("qe").value=qsts[nbq];
pq(qsts[nbq]);

//alert("a");

