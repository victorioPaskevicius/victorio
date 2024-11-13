import sqlite3
import pandas as pd

square = lambda n: n * n if isinstance(n, (int, float)) else None


with sqlite3.Connection("SQL/Base de Datos/Nortwind.db") as conn:
    conn.create_function("square",1,square)
    cursor = conn.cursor()
    cursor.execute("SELECT price, square(Price) FROM Products WHERE Price >= 50")
    results = cursor.fetchall()
    results_df = pd.DataFrame(results)
    print(results_df)
    