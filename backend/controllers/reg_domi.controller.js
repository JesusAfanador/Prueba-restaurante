import {pool} from "../db.js";
import moment from "moment-timezone";

moment.tz.setDefault('America/Bogota'); 

// export const getAllDomicilios = async (req, res) => {
//     try {
//         const { fecha, nombre } = req.query;
//         let query = 'SELECT * FROM registros_domicilio';
//         const queryParams = [];
//         if (fecha) {
//             query += `WHERE DATE(fecha_domi) = ?`;
//             queryParams.push(fecha);
//         }
//         if (nombre) {
//             query += `${fecha ? ' AND' : ' WHERE'} nombre_cliente LIKE ?`;
//             queryParams.push(`%${nombre}%`);
//         }
//         query += ' ORDER BY fecha_domi DESC';
//         const [rows] = await pool.query(query, queryParams);
//         res.json(rows);
//     } catch (error) {
//         console.error("Error en getAllDomicilios:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
export const getAllDomicilios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM registros_domicilio ORDER BY fecha_domi DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRegistrosNombre = async (req, res) => {
    try {
        const { nombre } = req.params;
        const idnombre = (nombre);
        const [rows] = await pool.query('SELECT * FROM registros_domicilio WHERE nombre_cliente = ? ORDER BY fecha_domi DESC', [idnombre]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getRegistrosPorNombreYFecha = async (req, res) => {
    try {
        const { nombre, fecha } = req.params;
        let query = 'SELECT * FROM registros_domicilio WHERE nombre_cliente = ?';
        const params = [nombre];
        if (fecha) {
            query += ' AND DATE(fecha_domi) = ?';
            params.push(moment(fecha).format('YYYY-MM-DD'));
        }
        const [rows] = await pool.query(query, params);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getRegistrosPorFechaDomi = async (req, res) => {
    try {
        const { fecha } = req.params;
        const formattedFecha = moment(fecha).format('YYYY-MM-DD');
        const [rows] = await pool.query('SELECT * FROM registros_domicilio WHERE DATE(fecha_domi) = ? ORDER BY fecha_domi DESC', [formattedFecha]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getDomi = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await pool.query('SELECT * FROM registros_domicilio WHERE ID = ?', [id])
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

export const newDomicilio = async (req, res) => {
    try {
        const dataRegistrosDomicilio = req.body.rows; 

        for (const registro of dataRegistrosDomicilio) {
            const { nombre_cliente, producto, cantidad, precio, direccion, fecha_domi } = registro;
            const [rows] = await pool.query(
                'INSERT INTO registros_domicilio (nombre_cliente, producto, cantidad, precio, direccion, fecha_domi) VALUES (?, ?, ?, ?, ?, ?)',
                [nombre_cliente, producto, cantidad, precio, direccion, fecha_domi]
            );
        }
        res.status(200).json({ message: 'Datos de domicilio agregados exitosamente a registros_domicilio.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDomi = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_cliente, producto, cantidad, precio, direccion, fecha_domi } = req.body
        const [result] = await pool.query('UPDATE registros_domicilio SET nombre_cliente = IFNULL(?, nombre_cliente), producto = IFNULL(?, producto), cantidad = IFNULL(?, cantidad), precio = IFNULL(?, precio), direccion = IFNULL(?, direccion), fecha_domi = IFNULL(?, fecha_domi) WHERE ID = ?', [nombre_cliente, producto, cantidad, precio, direccion, fecha_domi, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'No encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM registros_domicilio WHERE ID = ?', [id])
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteDomi = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM registros_domicilio WHERE ID = ?', [req.params.id])
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