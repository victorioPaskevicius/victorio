nombre = ['juanpi','Leo','santi','Victorio','more','camila','nacho']
edades = []

def pedir_edad(nombre):
    for name in nombre:
        edad = int(input(f'{name} cuantos años tenes? '))
        edades.append((name,edad))
pedir_edad(nombre)
edades.sort(key=lambda x: x[1])

def profesor_alumno(edades):
    profesor = edades[0]
    asistente = edades[-1]
    print(f'El profesor es {profesor} y el asistente es {asistente}')
profesor_alumno(edades)