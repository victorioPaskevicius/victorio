# main.py
from crear import crear
from leer import leer
from actualizar import actualizar
from eliminar import eliminar

lista = []

def pedir_funcion(lista):
    while True:
        accion = input("""
        Elige una opcion
        1: Agregar tarea
        2: Leer lista
        3: Actializar tarea
        4: Eliminar tarea        
        5: Salir
        """)
        # Ejecución de las funciones
        if accion == '1':
            crear(lista)
        elif accion == '2':
            leer(lista)
        elif accion == '3':
            actualizar(lista)
        elif accion == '4':
            eliminar(lista)
        elif accion == '5':
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Por favor, elige una opción del 1 al 5.")
pedir_funcion(lista)