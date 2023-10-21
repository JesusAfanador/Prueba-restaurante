import {pool} from "../db.js"

//logica traer todos los productos
export const getProductos = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM producto')
        res.json(rows)
    } catch (error) {
        console.error('error en la solicitud:', error);
        res.status(500).json({message: 'Error en el server'});
    }
}

//logica para traer productos por Id
export const getProducto = async(req,res) => {
    try {
        const {id} =req.params;
        const [rows] = await pool.query('SELECT * FROM producto WHERE id_producto = ?',[id])
        if (rows.length <= 0) {
            return res.status(404).json({error: 'no se encontro nada'})
        }
        res.json(rows[0])
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(500).json({message:'error en el servidor'})
    }
}

//logica para crear un nuevo producto
export const createProductos = async(req,res) =>{
    try {
        const{nombre,presentacion,unidad,precio} = req.body;
        const query = 'INSERT INTO producto(nombre,presentacion,unidad,precio) VALUES(?,?,?,?)';
        const values = [nombre,presentacion,unidad,precio];
        if (!nombre) {
            throw new Error('se requiere el nombre');
        }
        if (!presentacion) {
            throw new Error('se requiere la presentacion');
        }
        if (!unidad) {
            throw new Error('se requiere la unidad');
        }
        if (!precio) {
            throw new Error('se requiere el precio');
        }
        
        await pool.query(query,values)
        res.status(200).json(
            {message:'Creacion exitosa 🎉'}
            )
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(500).json({message:'Error en el server'})
    }
}

//logica para eliminar un producto
export const deleteProducto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM producto WHERE id_producto = ?', [req.params.id]);
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'producto no existente o nulo '
            });
        }
        res.status(200).json({
            message: 'producto eliminado'
        });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: "Error de servidor" });
    }
}

//logica para actualizar un producto
export const updateProducto = async(req,res) =>{
    try {
        const {id} = req.params;
        const { nombre, presentacion, unidad, precio } = req.body;
        const query = "UPDATE producto SET nombre = ? , presentacion = ?  , unidad = ?, precio = ? WHERE id_producto = ?";
        const values = [nombre, presentacion, unidad, precio, id];
        const [result] = await pool.query(query, values);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'producto no encontrado'
            });
        }
        const [rows] = await pool.query('SELECT * FROM producto WHERE id_producto = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al ejecutar la solicitud');
        res.status(500).json({message:'Error del server'});
    }
}