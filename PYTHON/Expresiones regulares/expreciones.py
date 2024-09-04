import re

texto = """Hola maestro como andas 12.
yo ando muy bien 2.
por lo menos aca andamos laburando 3."""

# Haciendo una busqueda simple
resultado = re.search('Hola',texto)

# \d == Busca digitos numericos del 0 al 9
resultado2 = re.findall(r'\d',texto)

# \D == Busca TODO menos numeros
resultado3 = re.findall(r'\D',texto)

# \w == Busca caracteres alfanumericos [a-z A-Z 0-9 _]
resultado4 = re.findall(r'\w',texto)

# \W == Busca TODO menos caracteres alfanumericos [a-z A-Z 0-9 _]
resultado5 = re.findall(r'\W',texto)

# \s == Busca espacios y saltos en linea
resultado6 = re.findall(r'\s',texto)

# \S == Busca TODO menos espacios y saltos en linea
resultado7 = re.findall(r'\S',texto)

# \n == Busca menos saltos en linea
resultado8 = re.findall(r'\n',texto)

# . == Busca TODO menos saltos en linea
resultado9 = re.findall(r'.',texto)

# \ == Cancela caracteres especiales
resultado10 = re.findall(r'\.',texto)

# Armando una cadena que busca un numero seguido de un punto y un espacio
resultado11 = re.findall(r'\d\.\s',texto)

#^ Busca el comienzo de una linea
# flags=re.M Activa la multilinea
resultado12 = re.findall(r'^yo',texto,flags=re.M)

#$ Busca el final de una linea
# flags=re.M Activa la multilinea
resultado13 = re.findall(r'$3.',texto,flags=re.M)

#{n} Busca n cantidad de veces el valor de la izquierda
resultado14 = re.findall(r'\d{3}',texto)

#{n,m} Al menos n y como maximo m
resultado15 = re.findall(r'\d{1,3}',texto)

print(resultado15)