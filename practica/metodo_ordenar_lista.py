import random

# Creando la lista de numeros y desordenandola
lista = list(range(101))
random.shuffle(lista)

lista_ordenada = list()

# Ordenando la lista
def ordenar_lista():
    while len(lista) != 0:
        numero_min = min(lista)
        lista_ordenada.append(numero_min)
        lista.remove(numero_min)
    print(lista_ordenada)   
ordenar_lista()