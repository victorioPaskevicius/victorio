numbers = int(input('ingresa un numero: '))

def verificar_numero():
    if numbers % 2 == 0:
        print(f'El numero {numbers} es par')
    else:
        print(f'El numero {numbers} es impar')
verificar_numero()

# def numero_par():
#     for number in numbers:
#         if number % 2 == 0:
#             print(f'{number} par')
#         else:
#             print(f'{number} impar')
# numero_par()

