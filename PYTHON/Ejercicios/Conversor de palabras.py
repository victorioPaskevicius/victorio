# CONVERSOR DE PALABRAS

cadena_de_texto = input('Ingresa la oracion que desees y comprueba cuantas palabras hay: ')

conversor_array = cadena_de_texto.split()

cant_palabras = len(conversor_array)
print(cant_palabras)