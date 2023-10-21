import {pool} from "../db.js"

export const getMesas = async(req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mesas');
        res.json(rows)
    } catch (error) {
        res.status(500).json({message: 'Error en el server'});
    }
}

export const crearMesas = async (numeroMesa,imagen_url) => {
    try {
        const query = "INSERT INTO mesas(mesa,imagen_url) VALUES(?,?)";
        const values = [numeroMesa,imagen_url];
        const [rows] = await pool.query(query, values);
        return rows;
    } catch (error) {
        throw error;
    }
};

export const eliminarMesas = async(req,res) => {
    try {
        const [result] = await pool.query('DELETE FROM mesas WHERE mesa = ?', [req.params.id]);
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Mesa no encontrada'
            
            })
        
        }
        res.status(200).json({message: 'Se elimino la mesa 🎉'})
    } catch (error) {
        res.status(500).json({message: 'error interno'})
    }
}

export const updateMesas = async(req,res) => {
    try {
        const {id} = req.params;
        const {mesa,imagen_url} =req.body;
        const query = 'UPDATE mesas SET mesa = ?, imagen_url =?  WHERE id = ?';
        const values = [mesa,imagen_url,id];
        const [result] = await pool.query(query,values);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Mesa actualizada'})
        }
        const [rows] = await pool.query('SELECT * FROM mesas WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({message: 'Error en el server'});
    } 
}
