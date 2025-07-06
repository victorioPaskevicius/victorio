from flask import Flask, render_template,request,redirect,url_for
from flask_migrate import Migrate
from models import Cursos
from database import db
from forms import CursoForm

app = Flask(__name__)

USER_DB = 'postgres'
USER_PASSWORD = '1234'
SERVER_DB = 'localhost'
NAME_DB = 'demo'
FULL_URL_DB = f'postgresql://{USER_DB}:{USER_PASSWORD}@{SERVER_DB}/{NAME_DB}'

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar SQLAlchemy y Migrate
db.init_app(app)
migrate = Migrate(app, db)

# Clave secreta
app.config['SECRET_KEY'] = 'LLAVE_SECRETA'

# Rutas
@app.route('/')
def inicio():
    cursos = Cursos.query.all()
    total = Cursos.query.count()
    return render_template('index.html', cursos=cursos, total=total)

@app.route('/curso/<int:id>')
def curso(id):
    curso = Cursos.query.get(id)
    if curso is None:
        return f'Curso con ID {id} no encontrado.', 404
    return render_template('curso.html', curso=curso)

@app.route('/insertar-curso', methods=['GET', 'POST'])
def insertCourse():
    curso = Cursos()
    cursoForm = CursoForm(obj=curso)
    if request.method == 'POST':
        if cursoForm.validate_on_submit():
            cursoForm.populate_obj(curso)
            db.session.add(curso)
            db.session.commit()
            return redirect(url_for('inicio'))
    return render_template('insertar-curso.html', form=cursoForm)

# @app.route('editar-curso/')
# def editCourse(id):
#     pass

if __name__ == '__main__':
    app.run(debug=True)
