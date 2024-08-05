import pandas as pd

df = pd.read_csv("PYTHON\\Archivos_problemas_resueltos\\archivo.csv")
df["nombre"] = df["nombre"].astype(str)

print(nombres)