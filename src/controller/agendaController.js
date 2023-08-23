import { Router } from "express";
import { cmcagenda, inserir }from "../Repository/agendaRepository.js"


let endpoints = Router();

endpoints.get('/cmcagenda', async (req, resp) => {
    let dados = await cmcagenda();
    resp.send(dados);
})

endpoints.post('/agenda', async (req, resp) => {
    let filmes = req.body;

    let dados = await inserir(agenda);
    resp.send(dados);
})

export default endpoints;
