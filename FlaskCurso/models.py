from database import db
from sqlalchemy.orm import Mapped, mapped_column


# Modelo de datos
class Cursos(db.Model):
    __tablename__ = 'cursos'

    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(unique=True)
    instructor: Mapped[str] = mapped_column()
    topico: Mapped[str] = mapped_column()

    def __str__(self):
        return (
            f'ID: {self.id}, '
            f'Nombre: {self.nombre}, '
            f'Instructor: {self.instructor}, '
            f'Tópico: {self.topico}'
        )