/* ==========================================================
   COMMUN.JS — mécanique du site : rien à modifier ici.
   Tout le contenu se règle dans documents.js
   ========================================================== */

function creerListe(ul, documents){
  ul.innerHTML = "";
  if(!documents || documents.length === 0){
    const li = document.createElement("li");
    li.className = "vide";
    li.textContent = "Aucun document pour le moment.";
    ul.appendChild(li);
    return;
  }
  for(const doc of documents){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = doc.fichier;
    a.target = "_blank";
    a.rel = "noopener";
    const ic = document.createElement("span");
    ic.className = "pdf";
    ic.textContent = "PDF";
    a.appendChild(ic);
    a.appendChild(document.createTextNode(doc.titre));
    li.appendChild(a);
    ul.appendChild(li);
  }
}

/* Table de correspondance entre l'attribut data-liste des pages
   et les listes définies dans documents.js */
function listeNommee(nom){
  const tables = {
    COURS: COURS, FICHES: FICHES, TDS: TDS, TPS: TPS,
    KHOLLOSCOPE: KHOLLOSCOPE, PROGRAMMES_KHOLLE: PROGRAMMES_KHOLLE,
    CORRECTIONS_TD: CORRECTIONS_TD, CORRECTIONS_TP: CORRECTIONS_TP,
    DS: DS, CORRECTIONS_DS: CORRECTIONS_DS,
    DM: DM, CORRECTIONS_DM: CORRECTIONS_DM,
  };
  return tables[nom];
}

/* Remplit toutes les listes marquées data-liste, sauf celles de
   l'espace élèves (remplies seulement après saisie du code). */
function remplirLibres(){
  document.querySelectorAll("ul[data-liste]").forEach(function(ul){
    if(ul.closest("#contenu-eleves")) return;
    creerListe(ul, listeNommee(ul.dataset.liste));
  });
}

function remplirEleves(){
  document.querySelectorAll("#contenu-eleves ul[data-liste]").forEach(function(ul){
    creerListe(ul, listeNommee(ul.dataset.liste));
  });
}

/* ---------- Espace élèves ---------- */
function memoriser(val){ try{ sessionStorage.setItem("ats-acces", val); }catch(e){} }
function memoire(){ try{ return sessionStorage.getItem("ats-acces"); }catch(e){ return null; } }

function initEspaceEleves(){
  const verrou = document.getElementById("verrou");
  const contenu = document.getElementById("contenu-eleves");
  if(!verrou || !contenu) return;

  function deverrouiller(){
    remplirEleves();
    verrou.hidden = true;
    contenu.hidden = false;
  }

  document.getElementById("form-code").addEventListener("submit", function(ev){
    ev.preventDefault();
    const champ = document.getElementById("code");
    const err = document.getElementById("erreur-code");
    if(champ.value.trim() === CODE_ACCES){
      memoriser("oui");
      err.textContent = "";
      deverrouiller();
    }else{
      err.textContent = "Code incorrect.";
      verrou.classList.remove("secousse");
      void verrou.offsetWidth;
      verrou.classList.add("secousse");
      champ.select();
    }
  });

  document.getElementById("btn-verrouiller").addEventListener("click", function(){
    memoriser("");
    contenu.hidden = true;
    verrou.hidden = false;
    document.getElementById("code").value = "";
  });

  if(memoire() === "oui"){ deverrouiller(); }
}

/* ---------- Annonce (accueil) ---------- */
function initAnnonce(){
  const zone = document.getElementById("zone-annonce");
  if(!zone) return;
  if(typeof ANNONCE !== "undefined" && ANNONCE){
    document.getElementById("texte-annonce").textContent = ANNONCE;
    zone.hidden = false;
  }
}

/* ---------- Apparition douce au défilement ---------- */
function initApparitions(){
  const obs = new IntersectionObserver(function(entrees){
    for(const e of entrees){
      if(e.isIntersecting){ e.target.classList.add("visible"); obs.unobserve(e.target); }
    }
  },{threshold:.08});
  document.querySelectorAll(".apparait").forEach(function(el){ obs.observe(el); });
}

remplirLibres();
initEspaceEleves();
initAnnonce();
initApparitions();
