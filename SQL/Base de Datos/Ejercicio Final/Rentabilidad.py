import sqlite3
import pandas as pd
import matplotlib.pyplot as plt

# Obteniendo el Producto mas rentable
with sqlite3.connect("sql/Base de datos/nortwind.db") as conn:
    query = """
         SELECT OrderDetailID, ProductName, SUM(Price * Quantity) as revenue
         FROM OrderDetails od
         JOIN Products p ON p.ProductID = od.ProductID
         GROUP by od.ProductID
         ORDER by revenue DESC
         LIMIT 10
    """

top_products = pd.read_sql_query(query,conn)
top_products.plot(x="OrderDetailID", y="revenue", kind="bar",figsize=(10,5),legend=False)
plt.title("10 Productos más rentables")
plt.xlabel("Productos")
plt.ylabel("revenue")
plt.show()

# Obteniendo el empleado mas rentable
with sqlite3.connect("sql/Base de datos/nortwind.db") as conn2:
    query2 = """
        SELECT FirstName,LastName,count(*) as ordenes FROM Orders o
        JOIN Employees e on e.EmployeeID = o.EmployeeID
        GROUP by o.EmployeeID
        ORDER by ordenes DESC
"""
top_employees = pd.read_sql_query(query2,conn2)
top_employees.plot(x="FirstName",y="ordenes",figsize=(10,5),legend=False,kind="bar")
plt.title("Empleados mas rentables")
plt.xlabel("FirstName")
plt.ylabel("ordenes")
plt.show()