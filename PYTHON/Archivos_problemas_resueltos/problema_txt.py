# creando las listas con nombres y apellidos
nombres = ['victorio','camila','da vinchi','pepito']
apellidos = ['Paskevicius','flores','di caprio','rojas']

# pasando nombres y apellidos a un archivo txt
with open("python\\Archivos_problemas_resueltos\\nombres_apellidos.txt","w",encoding="UTF-8") as archivo:
    
    # recorriendo nombres con un bucle for
    lista_nombres = []
    for nombre in nombres:
        lista_nombres.append(nombre)
    archivo.writelines(str(f'los nombres son: {lista_nombres} \n'))
    
    # recorriendo apellidos con un bucle for
    lista_apellidos = []
    for apellido in apellidos:
        lista_apellidos.append(apellido)
    archivo.writelines(str(f'los apellidos son: {lista_apellidos} \n'))
    
    # Leyendo el archivo txt
    archivo = archivo.readlines()
print(archivo)