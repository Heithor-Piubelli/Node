import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config(); // Carrega variáveis do .env

// Criar conexão com MySQL
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

// Função para consultar usuários
export async function getAll() {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        console.log("Usuários encontrados:");
        return rows;
    } catch (err) {
        console.error("Erro ao consultar o banco:", err);
    }
}

export async function getEmailSenha(email, senha){
    try{
        const [rows] = await pool.query(`SELECT * FROM usuario
            WHERE email = ?
            AND senha = ?`, [email, senha]);
        console.log("Usuários encontrados:");
        return rows;
    }catch (err){
        console.error("Erro ao consultar o banco:", err);
    }
}

export async function getById(id_usuario) {
    try {
        const [rows] = await pool.query(`
            SELECT * FROM usuario
                 WHERE id_usuario = ?
                `, [id_usuario]);
        console.log("Usuários encontrados:");
        return rows;
    } catch (err) {
        console.error("Erro ao consultar o banco:", err);
    }
}

export async function create(nome, email, senha){
    try{
        const [rows] = await pool.query(`
            INSERT INTO USUARIO (nome, email, senha)
            VALUES (?, ?, ?)
        `, [nome, email, senha]);
        console.log("Usuário criado:");
        return rows;
    } catch (err) {
        console.error("Erro ao consultar o banco:", err);
    }
}

export async function update (id_usuario, nome, email, senha){
    try{
        const [rows] = await pool.query(`
            UPDATE usuario 
            SET nome = ?, email = ?, senha = ?
            WHERE id_usuario = ?
            `, [nome, email, senha, id_usuario]);
        console.log("Usuário atualizado:");
        return rows;
    }catch (err){
        console.error("Erro ao consultar o banco:", err);
    }
}

// Chamando a função
//  getAll();
// getEmailSenha("Hec@123", "123");
// getById(2);
// create("teste", "teste", "123");
// update(3, "novoTeste", "novoEmail", "novaSenha");