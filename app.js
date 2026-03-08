const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());


//creamos un API Cartelera funcionando para comprobar que se haya conectado correctamente, mostrando este mensaje
app.get("/", (req, res) => {
    res.send("API Cartelera funcionando");
});


//generamos las funciones de POST, PUT, DELETE, GET, etc en este caso para genero
app.get("/generos", (req, res) => {
    db.query("SELECT * FROM genero", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/generos", (req, res) => {

    const { nombre, descripcion } = req.body;

    db.query(
        "INSERT INTO genero (nombre, descripcion) VALUES (?, ?)",
        [nombre, descripcion],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Genero creado con exito",
                    id: result.insertId
                });
            }
        }
    );

});

app.put("/generos/:id", (req, res) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    db.query(
        "UPDATE genero SET nombre=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?",
        [nombre, descripcion, id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Genero actualizado con exito"
                });
            }
        }
    );

});

app.delete("/generos/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM genero WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Genero eliminado con exito"
                });
            }
        }
    );

});


//generamos las funciones de POST, PUT, DELETE, GET, etc en este caso para directores
app.get("/directores", (req, res) => {
    db.query("SELECT * FROM director", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/directores", (req, res) => {

    const { nombres } = req.body;

    db.query(
        "INSERT INTO director (nombres) VALUES (?)",
        [nombres],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Director creado",
                    id: result.insertId
                });
            }
        }
    );

});

app.put("/directores/:id", (req, res) => {

    const { id } = req.params;
    const { nombres } = req.body;

    db.query(
        "UPDATE director SET nombres=?, fecha_actualizacion=NOW() WHERE id=?",
        [nombres, id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Director actualizado"
                });
            }
        }
    );

});

app.delete("/directores/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM director WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Director eliminado"
                });
            }
        }
    );

});


//generamos las funciones de POST, PUT, DELETE, GET, etc en este caso para productoras
app.get("/productoras", (req, res) => {
    db.query("SELECT * FROM productora", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/productoras", (req, res) => {

    const { nombre, descripcion } = req.body;

    db.query(
        "INSERT INTO productora (nombre, descripcion) VALUES (?, ?)",
        [nombre, descripcion],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Productora creada",
                    id: result.insertId
                });
            }
        }
    );

});

app.put("/productoras/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    db.query(
        "UPDATE productora SET nombre=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?",
        [nombre, descripcion, id],
        (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ mensaje: "Productora actualizada con éxito" });
            }
        }
    );
});


app.delete("/productoras/:id", (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM productora WHERE id=?",
        [id],
        (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json({ mensaje: "Productora eliminada con éxito" });
            }
        }
    );
});


//generamos las funciones de POST, PUT, DELETE, GET, etc en este caso para tipo
app.get("/tipos", (req, res) => {
    db.query("SELECT * FROM tipo", (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/tipos", (req, res) => {

    const { nombre, descripcion } = req.body;

    db.query(
        "INSERT INTO tipo (nombre, descripcion) VALUES (?, ?)",
        [nombre, descripcion],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Tipo creado",
                    id: result.insertId
                });
            }
        }
    );

});

app.put("/tipos/:id", (req, res) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    db.query(
        "UPDATE tipo SET nombre=?, descripcion=?, fecha_actualizacion=NOW() WHERE id=?",
        [nombre, descripcion, id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Tipo actualizado"
                });
            }
        }
    );

});

app.delete("/tipos/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM tipo WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Tipo eliminado"
                });
            }
        }
    );

});


//generamos las funciones de POST, PUT, DELETE, GET, etc en este caso para media
app.get("/media", (req, res) => {

    const query = `
    SELECT 
        media.id,
        media.titulo,
        genero.nombre AS genero,
        director.nombres AS director,
        productora.nombre AS productora,
        tipo.nombre AS tipo
    FROM media
    JOIN genero ON media.genero_id = genero.id
    JOIN director ON media.director_id = director.id
    JOIN productora ON media.productora_id = productora.id
    JOIN tipo ON media.tipo_id = tipo.id
    `;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    });

});

app.post("/media", (req, res) => {

    const { serial, titulo, sinopsis, anio_estreno, genero_id, director_id, productora_id, tipo_id } = req.body;

    db.query(
        "INSERT INTO media (serial, titulo, sinopsis, anio_estreno, genero_id, director_id, productora_id, tipo_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [serial, titulo, sinopsis, anio_estreno, genero_id, director_id, productora_id, tipo_id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Media creada con exito",
                    id: result.insertId
                });
            }
        }
    );

});

app.put("/media/:id", (req, res) => {

    const { id } = req.params;
    const { titulo, sinopsis, anio_estreno } = req.body;

    db.query(
        "UPDATE media SET titulo=?, sinopsis=?, anio_estreno=?, fecha_actualizacion=NOW() WHERE id=?",
        [titulo, sinopsis, anio_estreno, id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Media actualizada con exito"
                });
            }
        }
    );

});


app.delete("/media/:id", (req, res) => {

    const { id } = req.params;

    db.query(
        "DELETE FROM media WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                res.status(500).json(err);
            } else {
                res.json({
                    mensaje: "Media eliminada con exito"
                });
            }
        }
    );

});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});