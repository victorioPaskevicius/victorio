import pandas as pd

df = pd.read_csv("victorio\\PYTHON\\Ejercicios\\ejercicios_curso\\Ejercicios Archivos\\archivo.csv")
cambiar_dato = df["edad"].astype(str)


cambiar = df["nombre"].replace('Bautista','Bauti')
print(cambiar[2])