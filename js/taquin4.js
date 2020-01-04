//FONCTIONS "globales"

function listeDivVersHTML(listeDiv){
  L=[];
  for (var i = 0; i<listeDiv.length; i++){
    L[i] = listeDiv[i].innerHTML;
  }
  return L
}

function reinit(){
  caseUn = document.getElementsByClassName("case-1")[0];
  caseDeux = document.getElementsByClassName("case-2")[0];
  caseTrois = document.getElementsByClassName("case-3")[0];
  caseQuatre = document.getElementsByClassName("case-4")[0];
  caseCinq = document.getElementsByClassName("case-5")[0];
  caseSix = document.getElementsByClassName("case-6")[0];
  caseSept = document.getElementsByClassName("case-7")[0];
  caseHuit = document.getElementsByClassName("case-8")[0];
  caseNeuf = document.getElementsByClassName("case-9")[0];
  caseDix = document.getElementsByClassName("case-10")[0];
  caseOnze = document.getElementsByClassName("case-11")[0];
  caseDouze = document.getElementsByClassName("case-12")[0];
  caseTreize = document.getElementsByClassName("case-13")[0];
  caseQuatorze = document.getElementsByClassName("case-14")[0];
  caseQuinze = document.getElementsByClassName("case-15")[0];
  caseSeize = document.getElementsByClassName("case-16")[0];

  caseUn.onclick = function(){
    echanger(caseUn);
  }

  caseDeux.onclick = function(){
    echanger(caseDeux);
  }

  caseTrois.onclick = function(){
    echanger(caseTrois);
  }

  caseQuatre.onclick = function(){
    echanger(caseQuatre);
  }

  caseCinq.onclick = function(){
    echanger(caseCinq);
  }

  caseSix.onclick = function(){
    echanger(caseSix);
  }

  caseSept.onclick = function(){
    echanger(caseSept);
  }

  caseHuit.onclick = function(){
    echanger(caseHuit);
  }

  caseNeuf.onclick = function(){
    echanger(caseNeuf);
  }

  caseDix.onclick = function(){
    echanger(caseDix);
  }

  caseOnze.onclick = function(){
    echanger(caseOnze);
  }

  caseDouze.onclick = function(){
    echanger(caseDouze);
  }

  caseTreize.onclick = function(){
    echanger(caseTreize);
  }

  caseQuatorze.onclick = function(){
    echanger(caseQuatorze);
  }

  caseQuinze.onclick = function(){
    echanger(caseQuinze);
  }

  caseSeize.onclick = function(){
    echanger(caseSeize);
  }
}
//VARIABLES
var cases = document.getElementsByClassName('case');

var listeNumeros = listeDivVersHTML(cases);
var listeInit= listeDivVersHTML(cases); listeInit[15]="";

var nouvellePartie = document.getElementsByClassName("nouvelle-partie");

var caseUn = document.getElementsByClassName("case-1")[0];
var caseDeux = document.getElementsByClassName("case-2")[0];
var caseTrois = document.getElementsByClassName("case-3")[0];
var caseQuatre = document.getElementsByClassName("case-4")[0];
var caseCinq = document.getElementsByClassName("case-5")[0];
var caseSix = document.getElementsByClassName("case-6")[0];
var caseSept = document.getElementsByClassName("case-7")[0];
var caseHuit = document.getElementsByClassName("case-8")[0];
var caseNeuf = document.getElementsByClassName("case-9")[0];
var caseDix = document.getElementsByClassName("case-10")[0];
var caseOnze = document.getElementsByClassName("case-11")[0];
var caseDouze = document.getElementsByClassName("case-12")[0];
var caseTreize = document.getElementsByClassName("case-13")[0];
var caseQuatorze = document.getElementsByClassName("case-14")[0];
var caseQuinze = document.getElementsByClassName("case-15")[0];
var caseSeize = document.getElementsByClassName("case-16")[0];

var ligneUn = document.getElementsByClassName("ligne-1");
var ligneDeux = document.getElementsByClassName("ligne-2");
var ligneTrois = document.getElementsByClassName("ligne-3");
var ligneQuatre = document.getElementsByClassName("ligne-4");



//Jeu
function mouvementPossible(Case){
  var numeroCase = Case.innerHTML;
  var indiceCase = listeNumeros.indexOf(numeroCase);
  var indiceVide = listeNumeros.indexOf(" ");
  if (indiceVide==-1){
    indiceVide = listeNumeros.indexOf("");
  };
  if (indiceCase===indiceVide+1 || indiceCase===indiceVide-1 || indiceCase===indiceVide+4 || indiceCase===indiceVide-4){
    return true;
  } else{
  return false;
  }
}

function echanger(Case){
  var numeroCase = Case.innerHTML;
  if (mouvementPossible(Case) === true){

    var l = listeNumeros.indexOf(numeroCase);
    var k = listeNumeros.indexOf(" ");
    if (k==-1){
      k = listeNumeros.indexOf("");
      listeNumeros[k] = numeroCase;
      listeNumeros[l] = "";

      cases[k]["className"] = cases[l]['className'];
      cases[k].innerHTML = cases[l].innerHTML;
      cases[l]["className"] = "case case-16";
      cases[l].innerHTML = "";
    }else{
    listeNumeros[k] = numeroCase;
    listeNumeros[l] = " ";

    cases[k]["className"] = cases[l]['className'];
    cases[k].innerHTML = cases[l].innerHTML;
    cases[l]["className"] = "case case-16";
    cases[l].innerHTML = " ";
  }


    for(var a = 0; a < 4; a++){
        ligneUn[0]["children"][a]["className"] = cases[a]["className"];
        ligneUn[0]["children"][a].innerHTML = cases[a].innerHTML;
        ligneDeux[0]["children"][a]["className"] = cases[a+4]["className"];
        ligneDeux[0]["children"][a].innerHTML = cases[a+4].innerHTML;
        ligneTrois[0]["children"][a]["className"] = cases[a+8]["className"];
        ligneTrois[0]["children"][a].innerHTML = cases[a+8].innerHTML;
        ligneQuatre[0]["children"][a]["className"] = cases[a+12]["className"];
        ligneQuatre[0]["children"][a].innerHTML = cases[a+12].innerHTML;
        reinit()
    bool=0;z=0;
    while (bool && z<16){
      bool=listeNumeros[z]==listeInit[z];
      z++;
    }
    if (z==16){
      var result = confirm( "BRAVO!!! Nouvelle Partie?" );
      if ( result ) {
        window.open("4-par-4.html", "_top");
      }
    }
    }
    }
  }

function newGame(){
  var randomCases=_.sampleSize(cases,16);
  listClasses=[];
  listNumbers=[];
  for(var a = 0; a < 4; a++){
      listClasses.push(randomCases[a]["className"]);
      listNumbers.push(randomCases[a].innerText);
    }
  for(var a = 0; a < 4; a++){
      listClasses.push(randomCases[a+4]["className"]);
      listNumbers.push(randomCases[a+4].innerText);

      }
  for(var a = 0; a < 4; a++){
      listClasses.push(randomCases[a+8]["className"]);
      listNumbers.push(randomCases[a+8].innerText);

        }
  for(var a = 0; a < 4; a++){
      listClasses.push(randomCases[a+12]["className"]);
      listNumbers.push(randomCases[a+12].innerText);

        }
  for(var a = 0; a < 4; a++){
    ligneUn[0]["children"][a]["className"] = listClasses[a];
    ligneDeux[0]["children"][a]["className"] = listClasses[a+4];
    ligneTrois[0]["children"][a]["className"] = listClasses[a+8];
    ligneQuatre[0]["children"][a]["className"] = listClasses[a+12];
    ligneUn[0]["children"][a].innerText = listNumbers[a];
    ligneDeux[0]["children"][a].innerText = listNumbers[a+4];
    ligneTrois[0]["children"][a].innerText = listNumbers[a+8];
    ligneQuatre[0]["children"][a].innerText = listNumbers[a+12];
    }
  listeNumeros=listNumbers;
  reinit()
}


newGame();
nouvellePartie[0].onclick = function(){
  newGame();
}
caseUn.onclick = function(){
  echanger(caseUn);
}

caseDeux.onclick = function(){
  echanger(caseDeux);
}

caseTrois.onclick = function(){
  echanger(caseTrois);
}

caseQuatre.onclick = function(){
  echanger(caseQuatre);
}

caseCinq.onclick = function(){
  echanger(caseCinq);
}

caseSix.onclick = function(){
  echanger(caseSix);
}

caseSept.onclick = function(){
  echanger(caseSept);
}

caseHuit.onclick = function(){
  echanger(caseHuit);
}

caseNeuf.onclick = function(){
  echanger(caseNeuf);
}

caseDix.onclick = function(){
  echanger(caseDix);
}

caseOnze.onclick = function(){
  echanger(caseOnze);
}

caseDouze.onclick = function(){
  echanger(caseDouze);
}

caseTreize.onclick = function(){
  echanger(caseTreize);
}

caseQuatorze.onclick = function(){
  echanger(caseQuatorze);
}

caseQuinze.onclick = function(){
  echanger(caseQuinze);
}

caseSeize.onclick = function(){
  echanger(caseSeize);
}
