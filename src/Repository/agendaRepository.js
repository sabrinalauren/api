import conexao from "./connection.js";

export async function cmcagenda() {
    let sql = 'select * from tb_agenda';    

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function inserir(agenda) {
        let sql = '';

        let resp = await conexao.query(sql, [])
        let dados = resp[0];

        agenda.id = dados.insertId;
        return agenda; 
}

