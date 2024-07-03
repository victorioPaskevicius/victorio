frase = input('Ingresa una frase para contar la cantidad de palabras que contiene: ')
def contar_palabras():
    frase_array = frase.split()
    cant_palabras = len(frase_array)
    if cant_palabras > 10:
        print('Para un poco, tampoco te pedi un testamento')
    else:
        print(f'La frase contiene {cant_palabras} palabras')
contar_palabras()