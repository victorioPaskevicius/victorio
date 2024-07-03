oracion = input('Escribe una frase para calcular cuanto tardaria una persona en decirlo: ')
array = oracion.split()
palabras = len(array)
tiempo = palabras//2

if tiempo >= 15:
    print('Para flaco, tampoco te pedi un testamento')

print(f'La persona dijo {palabras} palabras')
print(f'La cantidad de tiempo que tarda una persona normal en decir esa frase son {tiempo} seg.')

dalto_tiempo = tiempo//1.3
print(f'Dalto tardaria {dalto_tiempo} segundos en decir la frase.')