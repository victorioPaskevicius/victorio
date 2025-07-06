import 'package:flutter/material.dart';

int votosNegraGlobal = 0;
int votosAzulGlobal = 0;

void main() => runApp(VotacionApp());

class VotacionApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Votación Centro de Estudiantes',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: LoginPage(),
    );
  }
}

// PANTALLA DE LOGIN
class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController nombreController = TextEditingController();
  final TextEditingController gmailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Ingreso')),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Ingrese sus datos para votar', style: TextStyle(fontSize: 18)),
            SizedBox(height: 20),
            TextField(
              controller: nombreController,
              decoration: InputDecoration(labelText: 'Nombre completo'),
            ),
            TextField(
              controller: gmailController,
              decoration: InputDecoration(labelText: 'Correo Gmail'),
              keyboardType: TextInputType.emailAddress,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                final nombre = nombreController.text.trim();
                final gmail = gmailController.text.trim();
                if (nombre.isNotEmpty && gmail.contains('@escuelasproa.edu.ar')) {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => VotacionPage(nombre: nombre),
                    ),
                  );
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('Ingrese un nombre y Gmail válidos')),
                  );
                }
              },
              child: Text('Entrar'),
            ),
            SizedBox(height: 20),
            // if (votosNegraGlobal + votosAzulGlobal > 0)
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (_) => ResultadosPage()),
                  );
                },
                child: Text('Ver Resultados'),
              ),
          ],
        ),
      ),
    );
  }
}

// PANTALLA DE VOTACIÓN
class VotacionPage extends StatefulWidget {
  final String nombre;

  VotacionPage({required this.nombre});

  @override
  _VotacionPageState createState() => _VotacionPageState();
}

class _VotacionPageState extends State<VotacionPage> {
  bool yaVoto = false;

  void votar(String lista) {
    if (yaVoto) return;

    setState(() {
      if (lista == 'Negra') {
        votosNegraGlobal++;
      } else if (lista == 'Azul') {
        votosAzulGlobal++;
      }
      yaVoto = true;
    });

    Future.delayed(Duration(seconds: 2), () {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Gracias por votar, ${widget.nombre}')),
      );
      Navigator.pop(context);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Votar'),
        automaticallyImplyLeading: false,
      ),
      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Bienvenido, ${widget.nombre}', style: TextStyle(fontSize: 18)),
            SizedBox(height: 10),
            Text('¿Por qué lista desea votar?', style: TextStyle(fontSize: 16)),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: yaVoto ? null : () => votar('Negra'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.black),
              child: Text('Votar Lista Negra', style: TextStyle(color: Colors.white)),
            ),
            SizedBox(height: 10),
            ElevatedButton(
              onPressed: yaVoto ? null : () => votar('Azul'),
              style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
              child: Text('Votar Lista Azul', style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ),
    );
  }
}

// PANTALLA DE RESULTADOS
class ResultadosPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Resultados')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Recuento total de votos:', style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            Text('Lista Negra: $votosNegraGlobal', style: TextStyle(fontSize: 18)),
            Text('Lista Azul: $votosAzulGlobal', style: TextStyle(fontSize: 18)),
            SizedBox(height: 30),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text('Volver'),
            )
          ],
        ),
      ),
    );
  }
}
