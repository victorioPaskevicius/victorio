import re

# mail de prueba
mail = "victorioxd7@gmail.com"

# Validar mail con expreciones regulares
validacion = re.findall(r'\w{4,}@\w{4,}.\w{2}',mail)
if validacion:
    print('El mail es correcto')
else:
    print('El mail es incorrecto')