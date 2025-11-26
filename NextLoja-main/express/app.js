import express from 'express'
import { getAll, getById, getEmailSenha } from './index.js'
import cors from "cors";

const app = express()
const port = 8080
app.use(cors());//pacote de segurança decidindo quem pode acessar a API

app.get('/usuario', async (req, res) => {
    try {
        const usuarios = await getAll()
        res.json(usuarios)  // <-- usa JSON, não send
    } catch (e) {
        res.status(500).send("Erro")
    }
})

    app.get('/usuario/:email/:senha', async (req, res) =>{
        try{
            const {email , senha } = req.params //fazendo a recepção dos parâmetros na URL
            const usuario = await getEmailSenha(email,senha)
            res.json (usuario)
        } catch (e) {
            res.status(500).send("Erro")
        }
    })

    // app.get('/usuario/:id_usuario', async (req, res) =>{
    //     try{
    //         const {id_usuario} = req.params
    //         const usuario = await getById(id_usuario)
    //         res.json (usuario)
    //     } catch (e) {
    //         res.status(500).send("Erro")
    //     }
    // }) corrigir pois as URL estao se chocando
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})