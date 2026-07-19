# ============================================================
#  TP M2 - Frottements fluides
#  Partie 2 : chute d'une bille dans la glycerine
#  ----------------------------------------------------------
#  Completer les lignes marquees  >>> A COMPLETER
#  (ne rien modifier d'autre)
# ============================================================
import numpy as np

# ---- Mesures ----
H  = ...                       # hauteur de chute A -> B, en m    >>> A COMPLETER
Dt = np.array([...])           # les 10 durees mesurees, en s     >>> A COMPLETER

# ---- Evaluation de type A (voir le point de cours) ----
moyenne = np.mean(Dt)          # moyenne de la serie
sigma   = np.std(Dt, ddof=1)   # ecart-type experimental "n-1"
u_Dt    = ...                  # incertitude-type sur la moyenne  >>> A COMPLETER

print("Dt moyen =", moyenne, "s")
print("sigma    =", sigma, "s")
print("u(Dt)    =", u_Dt, "s")

# ---- Vitesse limite experimentale ----
v_exp = ...                    # v_exp = H / Dt moyen             >>> A COMPLETER
u_v   = ...                    # u(v) = v_exp * u(Dt) / Dt moyen  >>> A COMPLETER

print("v_exp    =", v_exp, "m/s")
print("u(v_exp) =", u_v, "m/s")
