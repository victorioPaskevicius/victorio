import pandas as pd

# Usando la funcion read_csv de pandas para leer un archivo csv
df = pd.read_csv("victorio\\PYTHON\\Archivos\\CSV\\archivo.csv")

# Obteniendo los datos de una columna en especifico
columna_edpecifica = df["edad"]

# Ordenando los valores de una columna por orden alfabetico o por orden de numeros
df_ordenado = df.sort_values('edad')

# Ordenando los valores de una columna por orden alfabetico o por orden de numeros pero al reves
df_ordenado_reves = df.sort_values('edad',ascending=False)

# Concatenando los 2 dataframes
df_concatenado = pd.concat([df,df_ordenado])

# Accediendo a la primer fila con head
primer_fila = df.head(1)

# Accediendo a la ultima fila con tail
ultima_fila = df.tail(1)

# Accediendo a la cantidad de filas y columnas con shape
filas,columnas = df.shape

# Accediendo a un elemento especifico del dataframe con loc
elemento_especifico_loc = df.loc[2,"nombre"]

# Accediendo a un elemento especifico del dataframe con iloc
elemento_especifico_iloc = df.iloc[2,0]

# Accediendo a filas con edad mayor a 30
mayor_30 = df.loc[df["edad"]>40,:"edad"]

print(mayor_30)
