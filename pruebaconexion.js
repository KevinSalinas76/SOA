import { pool } from './conexionBD.js'; // Asegurate que esta ruta sea correcta

const testConnection = async () => {
    console.log("Intentando conectar con PostgreSQL...");
    
    try {
        
        // Ejecuta una consulta simple para verificar la conexión
        const result = await pool.query('SELECT NOW() AS current_time');
        
        const currentTime = result.rows[0].current_time;
        
        console.log("✅ Conexión exitosa a la base de datos.");
        console.log(`Hora actual del servidor de BD: ${currentTime}`);

    } catch (error) {

        console.error("❌ Error de conexión con PostgreSQL:");
        console.error("Detalles del error:", error.message);
        
    } finally {

        await pool.end();
        console.log("Pool de conexiones cerrado.");

    }
};

testConnection();
