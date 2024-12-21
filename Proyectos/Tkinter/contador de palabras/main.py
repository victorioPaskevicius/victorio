import tkinter as tk

window = tk.Tk()
window.geometry("600x300")
# Este es el texto de bienvenida
welocome = tk.Label(window, text='Hola, introduce un texto para contar los caracteres y las palabras')
welocome.pack(pady=20)

# Este es lla funcion para saber cuantos caracteres tiene el texto
def count():
    # Cantidad de caracteres
    text = input.get()
    caracteres = len(text)
    # Cantidad de palabras
    text = input.get()
    array = text.split()
    words = len(array)
    answer = tk.Label(window, text=f"""
    La cantidad de caracteres que hay son: {caracteres}.
    Y la cantidad de palabras son: {words}
                                    """)
    answer.pack(pady=20)

# Este es el input en el cual se ingresa el texto
input = tk.Entry(window,)
input.pack(pady=20,fill="x")

button = tk.Button(window, text='Procesar',bg='lightblue', command=count)
button.pack(pady=20)

window.mainloop()