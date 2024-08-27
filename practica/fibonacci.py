a,b = 1,1
def fibonacci(a,b):
    while a < 100:
        suma = a+b
        print(suma)
        b = a
        a = suma
fibonacci(a,b)