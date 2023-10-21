import {pool} from "../db.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import CryptoJS from "crypto-js"
import dotenv from 'dotenv';
dotenv.config();
const { CLAVE, SECRETO } = process.env;

const SECRET = SECRETO
const x = CLAVE

export const getAdmin = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id_admin, nombre, correo, cargo  FROM admin ORDER BY nombre')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAdmin1 = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createAdmin = async (req, res) => {
    try {
        const { nombre, correo, cargo, password, confirmar_password } = req.body;
        if (!password) {
            return res.status(409).send('contraseña requerida.');
        }
        if (!nombre) {
            return res.status(409).send('Nombre de usuario requerido.');
        }
        if (nombre.length < 0) {
            return res.status(409).send('Nombre de usuario requerido.');
        }
        if (!correo) {
            return res.status(409).send('Correo requerido.');
        }
        if (cargo != "admin" && cargo != "empleado") {
            return res.status(409).send("escriba un cargo valido")
        }
        if (password !== confirmar_password){
            return res.status(409).send('Las contraseñas deben coincidir.');
    }
        const checkExistingUserQuery = 'SELECT * FROM admin WHERE nombre = ? OR correo = ?';
        const checkExistingUserValues = [nombre, correo];
        const [existingUser] = await pool.query(checkExistingUserQuery, checkExistingUserValues);
        if (existingUser.length > 0) {
            return res.status(409).send('Nombre de usuario o correo ya existente.');
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const insertQuery = 'INSERT INTO admin (nombre, correo, cargo, password) VALUES (?, ?, ?, ?)';
        const insertValues = [nombre, correo, cargo, hashedPassword];
        const [result] = await pool.query(insertQuery, insertValues);
            res.status(201).json({
            id_admin: result.insertId,
            nombre,
            correo,
            cargo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const traerProducto = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM inventario')
        res.send(rows)
    } catch(error) {
        res.status(500).json({error:error.message})
    }
}

export const createProducto = async (req, res) => {
    try {
        const { nombre_producto, categoria, presentacion, unidad, precio } = req.body;
        if (!nombre_producto) {
            return res.status(409).send('nombre de producto requerido.');
        }
        if (!categoria) {
            return res.status(409).send('categoria requerida.');
        }
        if (!presentacion) {
            return res.status(409).send('presentacion requerida.');
        }
        if (!unidad){
            return res.status(409).send('unidad requerida.');
        }
        if (!precio){
            return res.status(409).send('precio requerido.');
        }
        const insertQuery = 'INSERT INTO inventario (nombre_producto, categoria, presentacion, unidad, precio) VALUES (?, ?, ?, ?, ?)';
        const insertValues = [nombre_producto, categoria, presentacion, unidad, precio];
        const [result] = await pool.query(insertQuery, insertValues);
        res.status(201).json({
            id_producto: result.insertId,
            nombre_producto,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const confirmar = async (req, res) => {
    try {
    const { usuario, password } = req.body;
    if (!usuario) {
        return res.status(409).send('Usuario requerido.');
    }
    if (!password) {
        return res.status(409).send('contraseña requerida.');
    }
    const password2 = CryptoJS.AES.decrypt(password, x).toString(CryptoJS.enc.Utf8)
    const [rows] = await pool.query(
        'SELECT * FROM admin WHERE nombre = ? ', [usuario]
    );
        if (rows.length > 0) {
        const compassword = await bcrypt.compare(password, rows[0].password);
        const accesToken = jwt.sign({id: rows[0].id_admin}, SECRET, {
            expiresIn: "8h",
        });
        if(compassword){
            res.status(200).json(
                accesToken
                );
        }else{
            res.status(409).send("Las Contraseñas no Coinciden")
        }
        } else {
            res.status(409).send("El usuario no existe");
        }
        } catch (error) {
        res.status(500).json({ error: "Error del servidor" });
        }
};

export const deletePlatoCarrito = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM agrega_comida WHERE id_plato = ?', [req.params.id_plato]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombre, correo} = req.body
        const [result] = await pool.query('UPDATE admin SET nombre = IFNULL(?, nombre), correo = IFNULL(?, correo) WHERE id_admin = ?', [nombre, correo, id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: 'No encontrado'
        });
        }
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const actualizarContraseñaAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const {password, confirmarPassword} = req.body
        if (password !== confirmarPassword){
            return res.status(409).send('Las contraseñas deben coincidir.');
    }   
        const saltRounds = 10;
        const passwordEncripta = await bcrypt.hash(password, saltRounds);
        const [result] = await pool.query('UPDATE admin SET password = IFNULL(?, password) WHERE id_admin = ?', [passwordEncripta, id])
        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: 'No encontrado'
        });
        }
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id])
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteAdmin = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM admin WHERE id_admin = ?', [req.params.id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
            message: 'No encontrado'
            });
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}                                                                                                 