/* ============================================================
   DOCUMENTS.JS - LE SEUL FICHIER À MODIFIER AU QUOTIDIEN
   ============================================================
   Les rubriques Cours, Fiches, TD et TP sont organisées par
   sous-chapitres (les mêmes huit thèmes partout). Pour ajouter
   un document :
     1. Déposez le PDF dans le bon sous-dossier de "fichiers/"
        (ex. fichiers/cours/thermodynamique/ pour un cours de thermo)
     2. Ajoutez une ligne sous le bon thème, dans la bonne liste
   Pour retirer un document : supprimez sa ligne (ou mettez // devant).
   Attention : chaque ligne se termine par une virgule, et le nom
   du fichier doit être EXACTEMENT le même que celui déposé
   (majuscules comprises - évitez accents et espaces dans les noms).

   Correspondance thème → sous-dossier :
     Outils en physique      → outils
     Structure de la matière → structure-matiere
     Électrocinétique        → electrocinetique
     Mécanique du point      → mecanique-point
     Thermodynamique         → thermodynamique
     Mécanique des fluides   → mecanique-fluides
     Électromagnétisme       → electromagnetisme
     Ondes et perturbations  → ondes
   ============================================================ */

/* ------------------------------------------------------------
   CODE D'ACCÈS DE L'ESPACE ÉLÈVES
   ------------------------------------------------------------ */
const CODE_ACCES = "COEFFIN2026";

/* ------------------------------------------------------------
   COURS
   ------------------------------------------------------------ */
const COURS = {
  "Outils en physique": [
    { titre: "O1 - Analyse dimensionnelle", fichier: "fichiers/cours/outils/O1_Cours_Analyse_dimensionnelle.pdf" },
    { titre: "O5 - Mesures et incertitudes", fichier: "fichiers/cours/outils/O5_Cours_Incertitudes.pdf" },
     
  ],
  "Structure de la matière": [
    { titre: "C1 - Structure de la matière", fichier: "fichiers/cours/structure-matiere/C1_Cours_Structure_de_la_matiýre.pdf" },
  ],
  "Électrocinétique": [
    { titre: "EL1 - Circuits électriques dans l'ARQS", fichier: "fichiers/cours/electrocinetique/EL1_Cours_Circuits_électriques_ARQS.pdf" },
    { titre: "EL2 - Régime transitoire", fichier: "fichiers/cours/electrocinetique/EL2_Cours_Régime_transitoire.pdf" },
    { titre: "EL3 - Régime sinusoïdal", fichier: "fichiers/cours/electrocinetique/EL3_Cours_Régime_sinusoïdal.pdf" },
  ],
  "Mécanique du point": [
    { titre: "M1 - Description du mouvement", fichier: "fichiers/cours/mecanique-point/M1_Cours_Description_du_mouvement.pdf" },
    { titre: "M2 - Lois de Newton", fichier: "fichiers/cours/mecanique-point/M2_Cours_Lois_de_Newton.pdf" },
    { titre: "M3 - Approche énergétique du mouvement", fichier: "fichiers/cours/mecanique-point/M3_Cours_Approche_énergetique_du_mouvement.pdf" },
    { titre: "M4 - Oscillations libres", fichier: "fichiers/cours/mecanique-point/M4_Cours_Oscillations_libres.pdf" },
  ],
  "Thermodynamique": [
    { titre: "TH1 - Premier principe", fichier: "fichiers/cours/thermodynamique/TH1_Premier_principe.pdf" },
    { titre: "TH2 - Bilan enthalpique", fichier: "fichiers/cours/thermodynamique/TH2_Bilan_enthalpique.pdf" },
    { titre: "TH3 - Second principe", fichier: "fichiers/cours/thermodynamique/TH3_Second_principe.pdf" },
    { titre: "TH4 - Machines dithermes", fichier: "fichiers/cours/thermodynamique/TH4_Cours_Machines_dithermes.pdf" },
  ],
  "Mécanique des fluides": [
  ],
  "Électromagnétisme": [
  ],
  "Ondes et perturbations": [
  ],
};

/* ------------------------------------------------------------
   FICHES
   ------------------------------------------------------------ */
const FICHES = {
  "Structure de la matière": [
    { titre: "C1 - Structure de la matière", fichier: "fichiers/fiches/structure-matiere/C1_Recap_Structure_de_la_matière.pdf" },
  ],
  "Électrocinétique": [
    { titre: "EL1 - Circuits électriques dans l'ARQS", fichier: "fichiers/fiches/electrocinetique/EL1_Recap_Circuits_électriques_ARQS.pdf" },
    { titre: "EL2 - Régime transitoire", fichier: "fichiers/fiches/electrocinetique/EL2_Recap_Régime_transitoire.pdf" },
    { titre: "EL3 - Régime sinusoïdal", fichier: "fichiers/fiches/electrocinetique/EL3_Recap_Régime_sinusoïdal.pdf" },
  ],
  "Mécanique du point": [
    { titre: "M1 - Description du mouvement", fichier: "fichiers/fiches/mecanique-point/M1_Recap_Description_du_mouvement.pdf" },
    { titre: "M2 - Lois de Newton", fichier: "fichiers/fiches/mecanique-point/M2_Recap_Lois_de_Newton.pdf" },
    { titre: "M3 - Approche énergétique du mouvement", fichier: "fichiers/fiches/mecanique-point/M3_Recap_Approche_énergétique_du_mouvement.pdf" },
    { titre: "M4 - Oscillations libres", fichier: "fichiers/fiches/mecanique-point/M4_Recap_Oscillations_libres.pdf" },
  ],
  "Thermodynamique": [
    { titre: "TH1 - Premier principe", fichier: "fichiers/fiches/thermodynamique/TH1_Recap_Premier_principe.pdf" },
  ],
  "Mécanique des fluides": [
  ],
  "Électromagnétisme": [
  ],
  "Ondes et perturbations": [
  ],
};

/* ------------------------------------------------------------
   TD (énoncés)
   ------------------------------------------------------------ */
const TDS = {
  "Outils en physique": [
     { titre: "O1 - Analyse dimensionnelle", fichier: "fichiers/td/outils/O1_TD_Analyse_Dimensionelle.pdf" },
  ],
  "Structure de la matière": [
     { titre: "C1 - Atome et quantité de matière", fichier:"fichiers/td/structure-matiere/C1_TD1_Structure_de_la_matière.pdf"},
     { titre: "C1 - Le système thermodynamique", fichier:"fichiers/td/structure-matiere/C1_TD2_Structure_de_la_matière.pdf"},
     { titre: "C1 - Transformations et réaction chimique", fichier:"fichiers/td/structure-matiere/C1_TD3_Structure_de_la_matière.pdf"},
  ],
  "Électrocinétique": [
    // Exemple : { titre: "TD EL1", fichier: "fichiers/td/electrocinetique/TD_EL1.pdf" },
  ],
  "Mécanique du point": [
      {titre: "M1 - Description du mouvement", fichier: "fichiers/td/mecanique-point/M1_TD_Description_du_mouvement.pdf" },
      {titre: "M2 - Lois de Newton", fichier: "fichiers/td/mecanique-point/M2_TD_Lois_de_Newton.pdf" },
      {titre: "M3 - Théorèmes énergétiques", fichier: "fichiers/td/mecanique-point/M3_TD1_Approche_énergétique_du_mouvement.pdf" },
  ],
  "Thermodynamique": [
  ],
  "Mécanique des fluides": [
  ],
  "Électromagnétisme": [
  ],
  "Ondes et perturbations": [
  ],
};

/* ------------------------------------------------------------
   TP (sujets)
   ------------------------------------------------------------ */
/* Astuce : un TP peut être un PDF (sujet) OU un fichier Python (.py).
   La pastille (PDF / PY) et le comportement (ouverture ou téléchargement)
   s'adaptent automatiquement selon l'extension du fichier. */
const TPS = {
  "Outils en physique": [
  ],
  "Structure de la matière": [
  ],
  "Électrocinétique": [
    // Exemple PDF    : { titre: "TP EL1 - Sujet", fichier: "fichiers/tp/electrocinetique/TP_EL1.pdf" },
    // Exemple Python : { titre: "TP EL1 - Script", fichier: "fichiers/tp/electrocinetique/TP_EL1.py" },
  ],
  "Mécanique du point": [
     { titre: "M2 - Frottements fluide", fichier: "fichiers/tp/mecanique-point/M2_TP_Frottements_fluides.pdf"},
     { titre: "M2 - Python Partie 2", fichier: "fichiers/tp/mecanique-point/TP_M2_partie2_stats.py"},
     { titre: "M2 - Python Partie 3", fichier: "fichiers/tp/mecanique-point/TP_M2_partie3_ballon.py"},
  ],
  "Thermodynamique": [
  ],
  "Mécanique des fluides": [
  ],
  "Électromagnétisme": [
  ],
  "Ondes et perturbations": [
  ],
};

/* ------------------------------------------------------------
   ESPACE ÉLÈVES (protégé par le code d'accès - listes simples)
   ------------------------------------------------------------ */

const KHOLLOSCOPE = [
  // Exemple : { titre: "Kholloscope - 1er semestre", fichier: "fichiers/eleves/kholloscope/kholloscope_S1.pdf" },
];

const PROGRAMMES_KHOLLE = [
  // Exemple : { titre: "Programme de kholle - Semaine 1", fichier: "fichiers/eleves/kholles/programme_S1.pdf" },
];

const CORRECTIONS_TD = [
  // Exemple : { titre: "Correction TD EL1", fichier: "fichiers/eleves/corrections-td/TD_EL1_corr.pdf" },
];

const CORRECTIONS_TP = [
  // Exemple : { titre: "Correction TP 1", fichier: "fichiers/eleves/corrections-tp/TP1_corr.pdf" },
];

const DS = [
  // Exemple : { titre: "DS 1 - Énoncé", fichier: "fichiers/eleves/ds/DS1.pdf" },
];

const CORRECTIONS_DS = [
  // Exemple : { titre: "DS 1 - Correction", fichier: "fichiers/eleves/corrections-ds/DS1_corr.pdf" },
];

const DM = [
  // Exemple : { titre: "DM 1 - Énoncé", fichier: "fichiers/eleves/dm/DM1.pdf" },
];

const CORRECTIONS_DM = [
  // Exemple : { titre: "DM 1 - Correction", fichier: "fichiers/eleves/corrections-dm/DM1_corr.pdf" },
];

/* ------------------------------------------------------------
   Petite annonce affichée sur la page d'accueil (laissez "" pour rien)
   ------------------------------------------------------------ */
const ANNONCE = "";
