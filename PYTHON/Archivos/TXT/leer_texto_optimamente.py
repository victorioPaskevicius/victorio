# Abriendo el archivo optimamente con 'with open'
with open("PYTHON\\Archivos\\texto.txt",encoding="UTF-8") as archivo:
    
    # Leyendo el archivo asignado a una variable
    print(archivo.read())

# No es necesario cerrar el archivo