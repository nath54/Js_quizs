/////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////
var lmois=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"]
var listeElements=[];
var points=0;
var nbqt=20;
var nbq=0;
var qsts=[];
var dt=new Date();
var time=dt.getTime();
var repondu=false;
var reponses_q=[];
var content=document.getElementById("content");

/////////////////////////////////////////////////////////// FONCTIONS ///////////////////////////////////////////////////////////

function traitre_txt(txt){
    ntxt=txt
    ntxt=txt.toLowerCase();
    replacements={
        "é":"e",
        "è":"e",
        "ê":"e",
        "ë":"e",
        "â":"a",
        "ä":"a",
        "à":"a",
        "á":"a",
        "ç":"c",
        "ù":"u",
        "ú":"u",
        "û":"u",
        "ü":"u",
        "î":"i",
        "ï":"i",
        "í":"i",
        "ö":"o",
        "ô":"o",
        "ó":"o",
        "ñ":"n",
        " ":"",
        "\t":"",
        "\r":"",
        "\n":"",
        "!":"",
        ",":"",
        "?":"",
        ";":"",
        ".":"",
        ":":"",
        "/":"",
        "§":"",
        "%":"",
        "*":"",
        "-":"",
        "_":"",
        "'":"",
        '"':"",
        "(":"",
        ")":"",
        "&":"",
        "#":"",
        "{":"",
        "[":"",
        "|":"",
        "`":"",
        "\\":"",
        "^":"",
        "@":"",
        "]":"",
        "}":"",
        "=":"",
        "+":"",
        "°":"",
        "€":"",
        "£":"",
        "µ":"",
        "’":""
    }
    for(k of Object.keys(replacements)){
        while(ntxt.includes(k)){ ntxt=ntxt.replace(k,replacements[k]); }
    }

    return ntxt
}

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
    for( element of content.getChilds){
        content.removeChild( element );
    }
}

function randchoice(liste){
	return liste[parseInt(Math.random()*liste.length)]
}

function traiteRep(reps){
	var nreps=[];
	while( nreps.length<reps.length){
		r=randchoice(reps);
		if( !(isIn(nreps,r) ) ){
			nreps.push(r);
		}
	}
	return nreps;
}

function pq(q){
    //
    window.reponses_qcm=[];
	repondu=false;
	//nettoyage de la page
	for(e of listeElements ){
		content.removeChild(e);
	}
	listeElements=[];
	//création des éléments
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	content.appendChild(p1);
    listeElements.push( p1 );
    content.appendChild(p2);
    listeElements.push( p2 );
    var t=document.getElementById("qe");
    t.innerHTML= q.question;
    if(q["image"]!=undefined){
        document.getElementById("im").setAttribute("src",q.image);
    }
    else{
        document.getElementById("im").setAttribute("src","");
    }
    //content.appendChild(t);
    //listeElements.push( t );
    if(q.type=="qcu"){
        var nb=1;
        var reponses=traiteRep(q.reponses);
        reponses_q=reponses;
        var divq=document.createElement("div");
        divq.setAttribute("class","ligne")//"row no-collapse-1 center")

        for( r of reponses ){
            var b1=document.createElement("button");
            if(r.startsWith("quizs/")){
                var i = document.createElement("img");
                i.setAttribute("src",r);
                i.setAttribute("class","img_bt");
                b1.appendChild(i);
            }
            else{
                b1.innerHTML=r;
            }
            b1.setAttribute('onclick', "bb('"+r+"',"+nb+");");
            b1.setAttribute("id","b"+nb);
            b1.setAttribute("class","button_s1 button");
            divq.appendChild(b1);
            nb++;
        }
        content.appendChild(divq);
        listeElements.push( divq );
    }
    else if(q.type=="dat"){
        if(q.br.length>=3){
            var s1=document.createElement("select");
            s1.setAttribute("id","s1");
            var so1=document.createElement("optgroup");
            so1.innerHTML="jours";
            for(x=1;x<31;x++){
                o=document.createElement("option");
                o.innerHTML=""+x;
                so1.appendChild(o);
            }
            s1.appendChild(so1);
            s1.setAttribute("onClick","update_dat();");
            content.appendChild(s1);
            listeElements.push(s1);
        }
        if(q.br.length>=2){
            var s2=document.createElement("select");
            s2.setAttribute("id","s2");
            var so2=document.createElement("optgroup");
            so2.innerHTML="mois";
            for(x=0;x<lmois.length;x++){
                o=document.createElement("option");
                o.innerHTML=""+lmois[x];
                so2.appendChild(o);
            }
            s2.appendChild(so2);
            s2.setAttribute("onClick","update_dat();");
            content.appendChild(s2);
            listeElements.push(s2);
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
        s3.appendChild(so3);
        s3.setAttribute("onClick","update_dat();");
        content.appendChild(s3);
        listeElements.push(s3);
        var ppp=document.createElement("p");
        ppp.innerHTML=""
        ppp.setAttribute("id","pd");
        content.appendChild(ppp);
        listeElements.push(ppp);
        var nbt=document.createElement("button");
        nbt.setAttribute("class","button button_s2")
        nbt.innerHTML="confirmer";
        nbt.setAttribute("onClick","check_date();");
        nbt.setAttribute("id","qsuiv");
        content.appendChild(nbt);
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
        bt.setAttribute("class","button button_s2");
        content.appendChild( t );
        content.appendChild( p );
        content.appendChild( bt );
        listeElements.push(t);
        listeElements.push(p);
        listeElements.push(bt);
    }
    else if(q.type=="qcm"){
        //Titre
        t.innerHTML=q.question;
        content.appendChild( t );
        listeElements.push( t );
        //
        window.bonnes_reponses=q.br;
        var reponses=traiteRep(q.reponses);
        reponses_q=reponses;
        var divq=document.createElement("div");
        divq.setAttribute("class","colonne")//"row no-collapse-1 center")
        nb=0;
        for(r of reponses_q){
            //
            var choix=document.createElement("button");
            choix.innerHTML=r;
            choix.setAttribute("class","button button_s1 button_qcm");
            choix.setAttribute("onclick","qcm_press('bt_qcm_"+nb+"');");
            choix.setAttribute("id","bt_qcm_"+nb)
            choix.checked=false;
            //
            divq.appendChild( choix );
            //
            nb++;
        }
        content.appendChild( divq );
        listeElements.push( divq );
        var bt_rep=document.createElement("button");
        bt_rep.innerHTML="Répondre";
        bt_rep.setAttribute("class","button button_s3")
        bt_rep.setAttribute("onclick","rep_qcm();")
        bt_rep.setAttribute("id","bt_rep_qcm");
        content.appendChild( bt_rep );
        listeElements.push( bt_rep );
    }
    else if(q.type=="voc"){
        window.bonne_reponse=q.br;
        var t=document.createElement("h2");
        var inp=document.createElement("input");
        var tr=document.createElement("p");
        var bt=document.createElement("button");
        t.innerHTML=q.question;
        tr.setAttribute("id","txt_rep");
        inp.setAttribute("type","text");
        inp.setAttribute("id","input");
        inp.setAttribute("onkeypress","checkEnterVoc(event);");
        bt.setAttribute("onclick","rep_voc();");
        bt.setAttribute("class","button button_s3");
        bt.setAttribute("id","button");
        bt.innerHTML="ok";
        content.appendChild( t );
        content.appendChild( tr );
        content.appendChild( inp );
        content.appendChild( bt );
        listeElements.push(t);
        listeElements.push(tr);
        listeElements.push(inp);
        listeElements.push(bt);
    }
    document.getElementById("qe").value=q;
}

function ecran_fin(){
	//nettoyage de la page
	for(e of listeElements ){
        try{
            content.removeChild(e);
        }
        catch{
        }
	}
	listeElements=[];
	//afichage
	var t1=document.createElement("p");
	t1.innerHTML="Le quiz est fini !";
	content.appendChild( t1 );
	listeElements.push( t1 );
	var t2=document.createElement("p");
	t2.innerHTML="Vous avez fait un score de "+points+" / "+nbqt;
	content.appendChild( t2 );
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
	content.appendChild( t3 );
    listeElements.push( t3 );

    var aaa=document.createElement("a");
    aaa.setAttribute("href","quiz.html?quizjs="+window.quizjs+"&titre="+window.titre+" (refait);")
    var b1=document.createElement("button");
    b1.innerHTML="Refaire le quiz ( les questions peuvent etre differentes) ";
    b1.setAttribute("id","bredo");
    b1.setAttribute("class","button button_s3")
    aaa.appendChild(b1);
    content.appendChild(aaa);
    listeElements.push( aaa );

    var aba=document.createElement("a");
    aba.setAttribute("href","index.html")
    var b2=document.createElement("button");
    b2.innerHTML="Menu";
    b2.setAttribute("id","bmenu");
    b2.setAttribute("class","button button_s3")
    aba.appendChild(b2);
    content.appendChild(aba);
    listeElements.push( aba );
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

function bb(txt,num){
	if( repondu ){
		return false;
	}
	else{
		repondu=true;
	}
	var qq=document.getElementById("qe").value;
    var bt=document.getElementById("b"+num);
	if( qq.br == txt ){
        points++;
        bt.setAttribute("style","background-color:green");
    }
    else{
        bt.setAttribute("style","background-color:red");
        try{
            var bbt=document.getElementById("b"+(reponses_q.indexOf(qq.br)+1));
            bbt.setAttribute("style","background-color:green");
        }
        catch{
        }
    }
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    nbt.setAttribute("class","button button_s3")
    content.appendChild(nbt);
    listeElements.push(nbt);
}

function rep_qcm(){
	if( repondu ){
		return false;
	}
	else{
		repondu=true;
	}
	var qq=document.getElementById("qe").value;
    window.bonnes_reponses.sort();
    window.reponses_qcm.sort();
    var t1=window.bonnes_reponses.join(" ");
    var t2=window.reponses_qcm.join(" ");
    console.log(t1 , t2);
	if( t1 == t2 ){
        points++;
        var jj=[];
        for(r of window.reponses_qcm){jj.push(r)};
        for(rr of jj){
            var idb="bt_qcm_"+(reponses_q.indexOf(rr));
            var bbt=document.getElementById(idb);
            bbt.setAttribute("style","background-color:green");
        }
    }
    else{
        var jj=[];
        for(r of window.reponses_qcm){jj.push(r)};
        for(r of window.bonnes_reponses){
            if(!jj.includes(r)){ jj.push(r); }
        }
        for(rr of jj){
            var idb="bt_qcm_"+(reponses_q.indexOf(rr));
            var bbt=document.getElementById(idb)
            if(window.bonnes_reponses.includes(bbt.innerHTML)){
                bbt.setAttribute("style","background-color:green");
            }
            else{
                bbt.setAttribute("style","background-color:red");
            }
        }
    }
    delete listeElements[listeElements.indexOf(document.getElementById("bt_rep_qcm"))];
    content.removeChild(document.getElementById("bt_rep_qcm"));
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    nbt.setAttribute("class","button button_s3")
    content.appendChild(nbt);
    listeElements.push(nbt);
}

function rep_voc(){
    br=window.bonne_reponse
    rep=document.getElementById("input").value;
    good=false;
    if(typeof br == "string"){
        good=traitre_txt(br)==traitre_txt(rep)
    }
    else{
        for(r of br){
            if(!good){
                good=traitre_txt(r)==traitre_txt(rep)
            }
        }
    }
    if(good){
        points++;
        document.getElementById("txt_rep").innerHTML="Bonne réponse !";
        document.getElementById("txt_rep").style.color="green";
    }
    else{
        document.getElementById("txt_rep").innerHTML="Mauvaise réponse ! La bonne réponse était "+br;
        document.getElementById("txt_rep").style.color="red";
    }
    document.getElementById("input").setAttribute("onkeypress","checkEnterSuiv(event);");
    document.getElementById("button").innerHTML="question suivante";
    document.getElementById("button").setAttribute("onclick","qsuiv();")
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
	var qq=document.getElementById("qe").value;
    //alert(qq.br.length);
    var l=qq.br.length;
    if(l>=2){
	    var moi=document.getElementById("s2").value;
    }
    if(l>=3){
	    var jour=document.getElementById("s1").value;
	}
	var an=document.getElementById("s3").value;
	var rep=[an];
	var b=qq.br;
    var bonne_rep=b.join(' ');
	var cond=b[0]==rep[0]
	if(l>=2){
        var rep=[moi,an];
        var cond=b[0]+'_'+b[1]==rep[0]+'_'+rep[1];
    }
    if(l>=3){
        var rep=[jour,moi,an];
        var cond=b[0]+'_'+b[1]+'_'+b[2]==rep[0]+'_'+rep[1]+'_'+rep[2];
    }
	for(e of listeElements ){
		content.removeChild(e);
	}
	listeElements=[];
	//création des éléments
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	content.appendChild(p1);
    listeElements.push( p1 );
    content.appendChild(p2);
    listeElements.push( p2 );
    var t=document.createElement("h1");
    t.innerHTML= qq.question;
    content.appendChild(t);
    listeElements.push( t );
    if( cond ){
        points+=1;
        var tt=document.createElement("h2");
        tt.innerHTML= "Vous avez juste !";
        tt.setAttribute("style","color:green;");
        content.appendChild(tt);
        listeElements.push( tt );
    }
    else{
        var tt=document.createElement("h2");
        tt.innerHTML= "Vous avez faux ! La bonne réponse était : le "+bonne_rep;
        tt.setAttribute("style","color:red;");
        content.appendChild(tt);
        listeElements.push( tt );
    }
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    nbt.setAttribute("class","button button_s3")
    content.appendChild(nbt);
    listeElements.push(nbt);
}

function inpet2(){
	var tp=5
	//nettoyage de la page
	for(e of listeElements ){
		content.removeChild(e);
	}
	listeElements=[];
	var t=document.createElement("h2");
    t.innerHTML="Attendez "+tp+" sec";
    var bt=document.createElement("button");
    bt.setAttribute("onClick","inpet3("+tp+");");  //en sec
    bt.setAttribute("class","button button_s2");
    bt.innerHTML="Continuer";
    content.appendChild( t );
    content.appendChild( bt );
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
		content.removeChild(e);
	}
	listeElements=[];
	//
	var qq=document.getElementById("qe").value;
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	content.appendChild(p1);
    listeElements.push( p1 );
    content.appendChild(p2);
    listeElements.push( p2 );
    var t=document.createElement("h1");
    t.innerHTML= qq.question;
    //alert(qq.question);
	var tt=document.createElement("h2");
    tt.innerHTML="Recopiez la définition mot pour mot ( Vous n'êtes pas obligés de mettres les accents, les majuscules, les espaces ou les ponctuations)";
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("id","input");
    inp.value="";
    inp.onpaste=function(){
        alert('Merci de ne pas copier/coller les définitions, le but est de les apprendre pour le Bac');        // on prévient
        return false;        // on empêche
    };
    var nbt=document.createElement("button");
    nbt.innerHTML="verifier";
    nbt.setAttribute("onClick","check_inp();");
    nbt.setAttribute("class","button button_s2");
    content.appendChild(t);
    content.appendChild(tt);
    content.appendChild(inp);
    content.appendChild(nbt);
    listeElements.push(nbt);
    listeElements.push( tt );
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
		else if( ["\t"," ","\n","\r",",",".",":","!","?","(",")"].includes(ll) ){
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
		content.removeChild(e);
	}
	listeElements=[];
	//création des éléments
	var p1=document.createElement("p");
	p1.innerHTML="question n°"+nbq+" sur "+nbqt;
	var p2=document.createElement("p");
	p2.innerHTML="score : "+points+" / "+nbq;
	content.appendChild(p1);
    listeElements.push( p1 );
    content.appendChild(p2);
    listeElements.push( p2 );
    var p=document.createElement("p");
    //
    var tt=document.createElement("h2");
    //alert(traiteInp(rep));
   // alert(traiteInp(qq.br));
    if(traiteInp(rep)==traiteInp(qq.br)){
        tt.innerHTML="Vous avez juste !";
        tt.setAttribute("style","color:green;");
        points+=1;
    }
    else{
        tt.innerHTML="Vous avez faux ! Dommage, ce n'était pas facile, mais vous réussirerez mieux la prochaine fois ;)";
        tt.setAttribute("style","color:red;");
    }
    p.innerHTML="La bonne réponse était : "+qq.br;
    var nbt=document.createElement("button");
    nbt.innerHTML="question suivante";
    nbt.setAttribute("onClick","qsuiv();");
    nbt.setAttribute("id","qsuiv");
    nbt.setAttribute("class","button button_s3")
    content.appendChild(nbt);
    content.appendChild( tt );
    content.appendChild( p );
    listeElements.push(nbt);
    listeElements.push(tt);
    listeElements.push(p);
}


function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele != value; });}

function qcm_press(id_bt){
    var bt=document.getElementById(id_bt);
    if(bt.checked){
        bt.checked=false;
        bt.setAttribute("class","button button_s1  button_qcm");
        //
        window.reponses_qcm=arrayRemove(window.reponses_qcm,bt.innerHTML);
    }
    else{
        bt.checked=true;
        bt.setAttribute("class","button button_s2  button_qcm");
        //
        window.reponses_qcm.push(bt.innerHTML);
    }
}


function checkEnterVoc(e) {
    if(e && e.keyCode == 13) {
       rep_voc();
    }
 }

function checkEnterSuiv(e) {
    if(e && e.keyCode == 13) {
        qsuiv();
    }
}



/////////////////////////////////////////////////////////// MAIN CODE ///////////////////////////////////////////////////////////

var parameters = location.search.substring(1).split("&");
var qt=false;
window.titre="Quiz";
window.quizjs="quizs/q1/quiz.html"

for(p of parameters){
    pp=p.split("=");
    if(pp.length==2){
        if(pp[0]=="titre"){
            document.getElementById("titre").innerHTML=pp[1];
            window.titre=pp[1];
        }
        else if(pp[0]=="quizjs"){
            var qj = document.createElement("script");
            qj.setAttribute("src",pp[1]);
            qj.setAttribute("type","text/javascript");
            qj.setAttribute("onload","init();");
            document.body.appendChild(qj);
            qt=true;
            window.quizjs=pp[1];
        }
    }
}

if(!qt){
    alert("error");
    window.location="index.html"
}

function init(){
    makequestions();
    document.getElementById("qe").value=qsts[nbq];
    pq(qsts[nbq]);
}
