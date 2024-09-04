nombres = ['Juan','Carlos','Roberto','Pepito','Reptil',]
apellidos = ['Lasoto','Liendo','Firminho','Gaga','Edonso',]

with open("victorio\\PYTHON\\Ejercicios\\ejercicios_curso\\lista.txt",'w',encoding="utf=8") as archivo:
    [archivo.writelines(f"Nombre: {n}\nApellido: {a}\n\n ")for n,a in zip(nombres,apellidos)]