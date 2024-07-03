import random

lista_palabras = ['Python','Programación','Computadora','Juego','Desarrollo','Internet','Tecnología','Innovación','Aprendizaje','Divertido','Algoritmo','Interactivo','Educación','Creatividad','Proyecto']

palabra_elegida = random.choice(lista_palabras)

intentos = 6

primer_letra = palabra_elegida[0]
ultima_letra = palabra_elegida[-1]

print(f'La primer letra es: {primer_letra}')
print(f'La segunda letra es: {ultima_letra}')

letra = input('dime una letra:')

if letra in palabra_elegida:
    print('La letra esta en la palabra')
else:
    print(f'La letra es incorrecta. Te quedan {intentos -1} intentos')
    
while intentos > 0:
    letra = input('Dime una letra: ')
    
    if letra in palabra_elegida:
        print('La letra está en la palabra.')
    else:
        intentos -= 1
        print(f'La letra es incorrecta. Te quedan {intentos} intentos.')
    
    if intentos == 0:
        print('Te has quedado sin intentos. La palabra era:', palabra_elegida)
        break