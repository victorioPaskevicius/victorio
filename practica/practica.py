potions = [3, 5, 6, 2]
goal = 8

def poderObjetivo(potions,goal):
    for i in potions:
        numero_anterior = i
        print(i)
        # target = numero_anterior + i
        # if target == goal:
        #     print(f'La suma de la pocion {numero_anterior} y la pocion {i} da la pocion especifica {target}')
        # else:
        #     continue;
        
poderObjetivo(potions,goal)