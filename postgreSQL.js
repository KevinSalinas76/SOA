import { pool } from './conexionBD.js'; 


export const getActividades = async () => { 
     try {
        const result = await pool.query('SELECT id, titulo, descripcion, fecha, hora, estatus, prioridad, enabled FROM actividades ORDER BY id ASC');

        const actividades = result.rows;
        
        console.log("--- Registros de Actividades ---");

        if (actividades.length === 0) {
            console.log("⚠️ La tabla de actividades no contiene registros.");
        } else {
            //console.table() para mostrar los datos como una tabla en la terminal
            console.table(actividades);
        }

    } catch (error) {
        console.error("❌ Error al obtener las actividades:", error.message);
        console.error("Detalles:", error); 
    } finally {
        // Cierra el pool al finalizar
        await pool.end();
        console.log("Conexión a BD cerrada.");
    }
};

getActividades();
