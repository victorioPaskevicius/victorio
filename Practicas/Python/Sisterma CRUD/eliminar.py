def eliminar(lista):
    tarea_a_eliminar = input('Que tarea deseas eliminar?: ')
    indice = lista.index(tarea_a_eliminar)
    lista.pop(indice)