import tkinter as tk

# ventana principal
window = tk.Tk()
window.geometry("1200x600")
window.title('Quiz de cultura general')

# Preguntas y respuestas
questions = [
    "¿Cuál es el país más grande del mundo en términos de superficie?",
    "¿Qué elemento químico tiene el símbolo 'O'?",
    "¿En qué año llegó el hombre a la Luna por primera vez?",
    "¿Cuál es el océano más grande del mundo?"
]
answers = [
    ['Estados Unidos', 'China', 'Rusia', 'Canadá'],
    ['Oro', 'Oxígeno', 'Osmio', 'Ozono'],
    ['1965', '1969', '1972', '1959'],
    ['Océano Atlántico', 'Océano Índico', 'Océano Ártico', 'Océano Pacífico']
]
correct_answers = {0: 'Rusia', 1: 'Oxígeno', 2: '1969', 3: 'Océano Pacífico'}  # Respuestas correctas

# Índice global para la pregunta actual
current_question = 0
score = 0  # Contador de respuestas correctas

# Función para actualizar la pregunta y las opciones
def update_question():
    global current_question
    if current_question < len(questions):  # Si hay más preguntas disponibles
        question.config(text=questions[current_question])  # Actualizar texto de la pregunta
        for i, btn in enumerate(option_buttons):  # Actualizar texto de los botones
            btn.config(text=answers[current_question][i], command=lambda answer=answers[current_question][i]: check_answer(answer))
    else:
        question.config(text=f"¡Quiz terminado! Puntaje final: {score}/{len(questions)}")  # Mostrar puntaje final
        for btn in option_buttons:
            btn.pack_forget()  # Ocultar botones

# Función para verificar si la respuesta es correcta
def check_answer(selected_answer):
    global current_question, score
    if selected_answer == correct_answers[current_question]:
        score += 1  # Incrementar puntaje si es correcto
    current_question += 1  # Pasar a la siguiente pregunta
    update_question()  # Actualizar el contenido

# Frame superior
title_frame = tk.Frame(window, bg="lightblue")
title_frame.pack(fill="x")
title = tk.Label(title_frame, text='Quiz de cultura general', bg="lightblue", font=("Arial", 32))
title.pack(pady=50)

# Frame del contenido
content_frame = tk.Frame(window)
content_frame.pack(expand=True, fill="both")

# Pregunta
question = tk.Label(content_frame, font=("Arial", 22), text="")
question.pack(pady=50)

# Frame de opciones
options_frame = tk.Frame(content_frame)
options_frame.pack(expand=True, fill="both")

# Crear botones para las opciones
option_buttons = []
for i in range(4):  # 4 opciones por pregunta
    btn = tk.Button(options_frame, text="", bg='lightblue', font=("Arial", 13), width=20)
    btn.pack(pady=10)
    option_buttons.append(btn)

# Inicializar con la primera pregunta
update_question()

# Iniciar la ventana principal
window.mainloop()
