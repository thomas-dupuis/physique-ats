/* ============================================================
   DOCUMENTS.JS — LE SEUL FICHIER À MODIFIER AU QUOTIDIEN
   ============================================================
   Pour ajouter un document sur le site :
     1. Déposez le fichier PDF dans le bon dossier de "fichiers/"
     2. Ajoutez une ligne dans la bonne liste ci-dessous
   Pour retirer un document : supprimez sa ligne (ou mettez // devant).
   Attention : chaque ligne se termine par une virgule, et le nom
   du fichier doit être EXACTEMENT le même que celui déposé
   (majuscules comprises — évitez accents et espaces dans les noms).
   ============================================================ */

/* ------------------------------------------------------------
   CODE D'ACCÈS DE L'ESPACE ÉLÈVES
   Changez-le entre les guillemets (puis communiquez-le à la classe).
   ------------------------------------------------------------ */
const CODE_ACCES = "COEFFIN2026";

/* ------------------------------------------------------------
   LIBRE ACCÈS
   ------------------------------------------------------------ */

const COURS = [
  { titre: "O1 — Analyse dimensionnelle", fichier: "fichiers/cours/O1_cours.pdf" },
  { titre: "EL1 — Circuits électriques dans l'ARQS", fichier: "fichiers/cours/EL1_cours.pdf" },
  { titre: "EL2 — Régime transitoire", fichier: "fichiers/cours/EL2_cours.pdf" },
];

const FICHES = [
  // Exemple : { titre: "Fiche récap — O1", fichier: "fichiers/fiches/O1_fiche.pdf" },
];

const TDS = [
  // Exemple : { titre: "TD O1 — Optique géométrique", fichier: "fichiers/td/TD_O1.pdf" },
];

const TPS = [
  // Exemple : { titre: "TP 1 — Focométrie", fichier: "fichiers/tp/TP1_focometrie.pdf" },
];

/* ------------------------------------------------------------
   ESPACE ÉLÈVES (protégé par le code d'accès)
   ------------------------------------------------------------ */

const KHOLLOSCOPE = [
  // Exemple : { titre: "Kholloscope — 1er semestre", fichier: "fichiers/eleves/kholloscope/kholloscope_S1.pdf" },
];

const PROGRAMMES_KHOLLE = [
  // Exemple : { titre: "Programme de kholle — Semaine 1", fichier: "fichiers/eleves/kholles/programme_S1.pdf" },
];

const CORRECTIONS_TD = [
  // Exemple : { titre: "Correction TD O1", fichier: "fichiers/eleves/corrections-td/TD_O1_corr.pdf" },
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
