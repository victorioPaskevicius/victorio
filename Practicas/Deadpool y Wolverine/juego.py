import random
wolverine_vida = 200
deadpool_vida = 150
turno = 0

while wolverine_vida and deadpool_vida > 0:
    turno += 1
    

    wolverine_daño = random.randint(1,100)
    deadpool_vida -= wolverine_daño
    print(f'Wolverine ataca y hace {wolverine_daño} de daño a Deadpool \n Vida de Deadpool: {deadpool_vida}')

    deadpool_daño = random.randint(1,150)
    wolverine_vida -= deadpool_daño
    print(f'Deadpool ataca y hace {deadpool_daño} de daño a Wolverine \n Vida de Wolverine: {wolverine_vida}')

    if deadpool_vida <= 0:
        print('Wolverine gana, ha vencido a Deadpool!')
    if wolverine_vida <= 0:
        print('Deadpool gana, ha vencido a Wolverine!')