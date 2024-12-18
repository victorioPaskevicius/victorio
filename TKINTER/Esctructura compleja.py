import tkinter as tk

# Función para mostrar un mensaje
def mostrar_mensaje():
    texto = entrada.get()  # Obtener el texto de la entrada
    etiqueta_resultado.config(text=f"Hola, {texto}!")

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Aplicación avanzada")
ventana.geometry("400x200")

# Etiqueta de bienvenida
etiqueta = tk.Label(ventana, text="Escribe tu nombre:", font=("Arial", 12))
etiqueta.pack(pady=10)

# Campo de entrada de texto
entrada = tk.Entry(ventana, font=("Arial", 12))
entrada.pack(pady=5)

# Botón para mostrar el mensaje
boton = tk.Button(ventana, text="Enviar", command=mostrar_mensaje)
boton.pack(pady=10)

# Etiqueta de resultado
etiqueta_resultado = tk.Label(ventana, text="", font=("Arial", 14), fg="blue")
etiqueta_resultado.pack(pady=10)

# Bucle principal
ventana.mainloop()