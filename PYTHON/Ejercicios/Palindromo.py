palabra = input('Ingresa una palabra y verifica si es palindromo: ')
palabra_invertida = palabra[::-1]
def leer_palabra():
    if palabra == palabra_invertida:
        print(f'La palabra es "{palabra}" es palindromo')
    else:
        print(f'La palabra "{palabra}" no es palindromo')
leer_palabra()