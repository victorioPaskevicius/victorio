import sqlite3
import pandas as pd

# square = lambda n : n*n

# Obteniendo Productos cuyo precio es mayor al promedio de su categoría
# SELECT * FROM Products p
# JOIN (
# 	SELECT CategoryID,avg(Price) as AvgPrice
#     FROM Products
#     GROUP BY CategoryID
# ) avg_table ON p.CategoryID = avg_table.CategoryID
# WHERE p.Price > avg_table.AvgPrice
# ORDER by p.CategoryID

# Proveedores que suministran productos con precio > 50
# SELECT * FROM Products p
# JOIN Suppliers s on p.SupplierID = s.SupplierID
# WHERE p.Price >= 50

# Categorías con promedio de precios mayor a 30
# SELECT *,avg(Price) as avgPriceCat FROM Categories c
# JOIN Products p
# on c.CategoryID = p.CategoryID
# GROUP by c.CategoryID
# HAVING avg(Price) >= 30





# with sqlite3.connect("sql/Base de datos/nortwind.db") as conn:
#     conn.create_function("square",1,square)
#     cursor = conn.cursor()
#     cursor.execute("SELECT *, square(CAST(Price AS FLOAT)) AS SquarePrice FROM Products")
#     results = cursor.fetchall()
#     df = pd.DataFrame(results)
#     print(df)
#     conn.commit()

# Obteniendo clientes que hicieron pedidos en 1997
# with sqlite3.connect("sql/Base de datos/nortwind.db") as conn:
#     cursor = conn.cursor()
#     cursor.execute("""
#             SELECT c.CustomerID,
#                 o.OrderID, 
#                 o.OrderDate
#             FROM Customers c
#             JOIN Orders o ON c.CustomerID = o.CustomerID
#             WHERE o.OrderDate BETWEEN '1997-01-01' AND '1997-12-31'
#             ORDER BY o.OrderDate ASC;
# """)
#     results = cursor.fetchall()
#     df = pd.DataFrame(results)
#     print(df)

# # Obteniendo el Producto mas rentable
# with sqlite3.connect("sql/Base de datos/nortwind.db") as conn:
#     query = """
#          SELECT OrderDetailID, ProductName, SUM(Price * Quantity) as revenue
#          FROM OrderDetails od
#          JOIN Products p ON p.ProductID = od.ProductID
#          GROUP by od.ProductID
#          ORDER by revenue DESC
#          LIMIT 10
#     """

# top_products = pd.read_sql_query(query,conn)
# top_products.plot(x="OrderDetailID", y="revenue", kind="bar",figsize=(10,5),legend=False)
# plt.title("10 Productos más rentables")
# plt.xlabel("Productos")
# plt.ylabel("revenue")
# plt.show()

# # Obteniendo el empleado mas rentable
# with sqlite3.connect("sql/Base de datos/nortwind.db") as conn2:
#     query2 = """
#         SELECT FirstName,LastName,count(*) as ordenes FROM Orders o
#         JOIN Employees e on e.EmployeeID = o.EmployeeID
#         GROUP by o.EmployeeID
#         ORDER by ordenes DESC
# """
# top_employees = pd.read_sql_query(query2,conn2)
# top_employees.plot(x="FirstName",y="ordenes",figsize=(10,5),legend=False,kind="bar")
# plt.title("Empleados mas rentables")
# plt.xlabel("FirstName")
# plt.ylabel("ordenes")
# plt.show()