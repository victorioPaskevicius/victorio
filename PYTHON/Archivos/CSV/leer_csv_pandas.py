import pandas as pd
#  Leer archivo CSV con pandas
df = pd.read_csv("PYTHON\\Archivos\\CSV\\archivo.csv",encoding="UTF-8")

# Obteniendo los datos de la columna nombre
nombres = df['nombre']
# print(nombres)

# Obteniendo los datos de la columna apellido
apellidos = df['apellido']
# print(apellidos)

# Ordenando el df por edad
df_ascendente = df.sort_values('edad')
# print(df_ordenado)

# Ordenando el df por edad de forma descendente
df_descendente = df.sort_values('edad',ascending=False)
# print(df_descendente)

# concatenando 2 df
df_concatenado = ([df_descendente,df_ascendente])
# print(df_concatenado)

# Accediendo a las primeras filas con head
primer_fila = df.head(1)
# print(primer_fila)

# Accediendo a las ultimas filas con tail
ultima_fila = df.tail(2)
# print(ultima_fila)

# Accediendo a las filas y columnas totales con shape
fila,columna = df.shape
# print(f'Las filas totales son {fila}, y las columnas totales son {columna}')

# Accediendo a un elemento especifico de la tabla con loc
elemento_loc = df.loc[2,'nombre']
# print(elemento_loc)

# Accediendo a un elemento especifico de la tabla con iloc
elemento_iloc = df.iloc[2,0]
# print(elemento_iloc)

# Accediendo a todas las filas de una columna con iloc
edades = df.iloc[:,2]
# print(edades)

# Accediendo a las edades mayores a 30
edades_30 = df.loc[df["edad"]<30,:]
# print(edades_30)