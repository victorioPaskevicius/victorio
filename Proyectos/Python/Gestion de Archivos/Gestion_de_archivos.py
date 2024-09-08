import re

with open("victorio\\Proyectos\\Python\\Gestion de Archivos\\archivo_texto.txt",encoding="utf=8") as arch:
    lineas = arch.readlines()
    cant_lineas = len(lineas)
    cant_carac = len(str(lineas))
    for palabra in lineas:
        cant_palabras = len(palabra)
    print(f'La cantidad de lineas de el texto es de: {cant_lineas}\nLa cantidad de palabras de el texto es de: {cant_palabras}\nLa cantidad de caracteres de el texto de: {cant_carac}')
    