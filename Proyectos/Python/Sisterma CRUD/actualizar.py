# actualizar.py
def actualizar(lista):
    reemplazar = input('¿Qué tarea quieres actualizar?: ')
    if reemplazar in lista:
        nueva_tarea = input('¿Cuál es la nueva tarea?: ')
        indice = lista.index(reemplazar)
        lista[indice] = nueva_tarea
    else:
        print('La tarea no se encuentra en la lista.')
