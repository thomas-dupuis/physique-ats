# ============================================================
#  TP M2 - Frottements fluides
#  Partie 3 : chute du ballon leste dans l'air (pointage FizziQ)
#  ----------------------------------------------------------
#  Completer les lignes marquees  >>> A COMPLETER
#  (ne rien modifier d'autre)
# ============================================================
import numpy as np
import matplotlib.pyplot as plt

# ---- Donnees exportees depuis FizziQ ----
# adapter le nom du fichier et le separateur si besoin
t, y = np.loadtxt("chute_ballon.csv", delimiter=";",
                  skiprows=1, unpack=True)

# ---- Trace de y(t) ----
plt.plot(t, y, "+")
plt.xlabel("t (s)")
plt.ylabel("y (m)")
plt.grid()
plt.show()

# ---- Modele affine sur la partie rectiligne (t >= t1) ----
# np.polyfit(abscisses, ordonnees, degre) renvoie les coefficients
# du polynome de degre choisi ajuste au mieux sur les points donnes.
t1 = ...                       # date lue sur le graphe, en s     >>> A COMPLETER
masque = (t >= t1)             # selection des points t >= t1
a, b = np.polyfit(...)         # modele affine y = a*t + b        >>> A COMPLETER

print("pente a =", a, "m/s")
