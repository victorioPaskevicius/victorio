import sqlite3
import pandas as pd

square = lambda n : n*n

with sqlite3.connect("sql/Base de datos/nortwind.db") as conn:
    conn.create_function("square",1,square)
    cursor = conn.cursor()
    cursor.execute("SELECT *, square(CAST(Price AS FLOAT)) AS SquarePrice FROM Products")
    results = cursor.fetchall()
    df = pd.DataFrame(results)
    print(df)
    conn.commit()