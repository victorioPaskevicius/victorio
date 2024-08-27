import random

lista_palabras = ['Python', 'Programacion', 'Computadora', 'Juego', 'Desarrollo', 'Internet', 'Tecnologia', 'Innovacion', 'Aprendizaje', 'Divertido', 'Algoritmo', 'Interactivo', 'Educacion', 'Creatividad', 'Proyecto']

palabra = random.choice(lista_palabras).lower()
letras_adivinadas = set()

def mostrar_palabra(palabra, letras_adivinadas):
    mostrar = ''
    for letra in palabra:
        if letra in letras_adivinadas:
            mostrar += letra + ' '
        else:
            mostrar += '_ '
    return mostrar

print(f'Palabra: {mostrar_palabra(palabra, letras_adivinadas)}')

def introd_letras():
    while True:
        letra = input('Introduce una letra: ').lower()
        if len(letra) != 1:
            print("Por favor, introduce una única letra.")
        
        if letra in letras_adivinadas:
            print("Ya has adivinado esa letra. Intenta con otra.")
        
        letras_adivinadas.add(letra)
        
        palabra_mostrada = mostrar_palabra(palabra, letras_adivinadas)
        print(f'Palabra: {palabra_mostrada}')
        
        if '_' not in palabra_mostrada:
            print("¡Felicidades! Has adivinado la palabra.")
            break

introd_letras()

print('muchas gracias')
