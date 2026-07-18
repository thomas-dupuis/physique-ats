/* ============================================================
   DOCUMENTS.JS — LE SEUL FICHIER À MODIFIER AU QUOTIDIEN
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
   (majuscules comprises — évitez accents et espaces dans les noms).

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
    { titre: "O1 — Analyse dimensionnelle", fichier: "fichiers/cours/outils/O1_cours.pdf" },
  ],
  "Structure de la matière": [
  ],
  "Électrocinétique": [
    { titre: "EL1 — Circuits électriques dans l'ARQS", fichier: "fichiers/cours/electrocinetique/EL1_cours.pdf" },
    { titre: "EL2 — Régime transitoire", fichier: "fichiers/cours/electrocinetique/EL2_cours.pdf" },
  ],
  "Mécanique du point": [
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
   FICHES
   ------------------------------------------------------------ */
const FICHES = {
  "Outils en physique": [
  ],
  "Structure de la matière": [
  ],
  "Électrocinétique": [
    // Exemple : { titre: "Fiche récap — EL1", fichier: "fichiers/fiches/electrocinetique/EL1_fiche.pdf" },
  ],
  "Mécanique du point": [
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
   TD (énoncés)
   ------------------------------------------------------------ */
const TDS = {
  "Outils en physique": [
  ],
  "Structure de la matière": [
  ],
  "Électrocinétique": [
    // Exemple : { titre: "TD EL1", fichier: "fichiers/td/electrocinetique/TD_EL1.pdf" },
  ],
  "Mécanique du point": [
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
const TPS = {
  "Outils en physique": [
  ],
  "Structure de la matière": [
  ],
  "Électrocinétique": [
  ],
  "Mécanique du point": [
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
   ESPACE ÉLÈVES (protégé par le code d'accès — listes simples)
   ------------------------------------------------------------ */

const KHOLLOSCOPE = [
  // Exemple : { titre: "Kholloscope — 1er semestre", fichier: "fichiers/eleves/kholloscope/kholloscope_S1.pdf" },
];

const PROGRAMMES_KHOLLE = [
  // Exemple : { titre: "Programme de kholle — Semaine 1", fichier: "fichiers/eleves/kholles/programme_S1.pdf" },
];

const CORRECTIONS_TD = [
  // Exemple : { titre: "Correction TD EL1", fichier: "fichiers/eleves/corrections-td/TD_EL1_corr.pdf" },
];

const CORRECTIONS_TP = [
  // Exemple : { titre: "Correction TP 1", fichier: "fichiers/eleves/corrections-tp/TP1_corr.pdf" },
];

const DS = [
  // Exemple : { titre: "DS 1 — Énoncé", fichier: "fichiers/eleves/ds/DS1.pdf" },
];

const CORRECTIONS_DS = [
  // Exemple : { titre: "DS 1 — Correction", fichier: "fichiers/eleves/corrections-ds/DS1_corr.pdf" },
];

const DM = [
  // Exemple : { titre: "DM 1 — Énoncé", fichier: "fichiers/eleves/dm/DM1.pdf" },
];

const CORRECTIONS_DM = [
  // Exemple : { titre: "DM 1 — Correction", fichier: "fichiers/eleves/corrections-dm/DM1_corr.pdf" },
];

/* ------------------------------------------------------------
   Petite annonce affichée sur la page d'accueil (laissez "" pour rien)
   ------------------------------------------------------------ */
const ANNONCE = "";
