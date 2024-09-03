import csv

with open("victorio\\PYTHON\\Archivos\\CSV\\archivo.csv",encoding="utf-8") as archivo:
    reader = csv.reader(archivo)
    for row in reader:
        print(row)