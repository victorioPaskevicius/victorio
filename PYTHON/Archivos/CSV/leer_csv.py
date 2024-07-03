import csv

with open("PYTHON\\Archivos\\CSV\\archivo.csv",encoding="UTF-8") as archivo:
    reader = csv.reader(archivo)
    for row in reader:
        print(row)