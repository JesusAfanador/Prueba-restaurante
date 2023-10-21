import {pool} from "../db.js"


export const informacion = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM informacion')
        res.send(rows)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const deleteInformacion = async(req,res) => {
try {
    const [result] = await pool.query('DELETE FROM informacion WHERE id_informacion = ?' ,[req.params.id]);
    if (result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'bebida no existente o nulo '
        });
    }
    res.status(200).json({
        message: 'informacion eliminada'
    });    
    } catch (error) {
        console.error('Error al eliminar informacion:', error);
        res.status(500).json({message:"Error de servidor"});
    }
}

export const obtenerInformacion = async (req, res) => {
try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM informacion WHERE id_informacion = ?', [id]);
    
    if (rows.length === 0) {
        res.status(404).json({ error: 'infor no encontrado' });
    } else {
        res.json(rows[0]); 
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateInfor = async(req,res) => {
try {
    const {id} = req.params;
    const {titulo, informacion} = req.body;
    const query = "UPDATE informacion SET Titulo = IFNULL( ?, Titulo), Informacion = IFNULL( ?, Informacion) WHERE id_informacion = ?";
    const values = [titulo, informacion, id];
    const [result] = await pool.query(query,values);
    if (result.affectedRows === 0) {
    return res.status(404).json({
    message: 'no encontrado'
    });
    }
    const [rows] = await pool.query('SELECT * FROM informacion WHERE id_informacion = ?', [id])
    res.json(rows[0])
    } catch (error) {
        console.error("Ups error al actualizar:", error);
        res.status(500).json({ message: "Error en el servidor" });
        
    }
}

export const updateImgInfor = async (imagen, id) => {
    try {
        const query = "UPDATE informacion SET imagen = ? WHERE id_informacion = ?";
        const values = [ imagen, id];
        const [result] = await pool.query(query,values);
    } catch (error) {
        throw error;
    }
}

export const crearInformacion = async (titulo, informacion, imagen_url) => {
    try {
        const query = "INSERT INTO informacion (Titulo, Informacion, imagen) VALUES(?,?,?)";
        const values = [titulo, informacion, imagen_url];
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (error) {
        throw error;
    }
};