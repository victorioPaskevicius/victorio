with open("PYTHON\\Archivos\\texto.txt","w",encoding="UTF-8") as archivo: 
    for i in range(5): archivo.write(f'linea {i+1} agregada \n\n')
    
    # Sobreescribiendo el archivo
    archivo.write('JAJAJJAJA\n\n')
    
    # Agregando otra linea de texto
    archivo.writelines(['hola jefe como estas?','\n','que onda che'])