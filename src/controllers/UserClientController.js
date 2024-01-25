import { UserClient } from "../models/UserClientModel.js";

let listUser = [
    {
        name: "Beatriz",
        email: "Beatriz@yahoo.com",
        password: "bea123",
        username: "bibi pirigosa",
        coins: 0,
        adm: true
    },
    {
        name: "Daniel",
        email: "Daniel@yahoo.com",
        password: "dandan123",
        username: "dan sensei",
        coins: 0,
        adm: true
    },
    {
        name: "Olivia",
        email: "oliviac@gmail.com",
        password: "via123",
        username: "via_44",
        coins: 0,
        adm: false
    },
    {
        name: "Guliver",
        email: "gulibas@gmail.com",
        password: "gubas123",
        username: "gubas",
        coins: 0,
        adm: false
    },
    {
        name: "Julia",
        email: "julinha@gmail.com",
        password: "juju123",
        username: "julis de quebrada",
        coins: 0,
        adm: false
    },
    {
        name: "Carol Sanches",
        email: "carolsc@gmail.com",
        password: "carolana123",
        username: "carolana28",
        coins: 0,
        adm: false
    },
    {
        name: "Fernanda Garys",
        email: "fergarys@gmail.com",
        password: "fer123",
        username: "fernanda gary gary",
        coins: 0,
        adm: false
    },
    {
        name: "Gabriela Guimaraes",
        email: "gabizinha@yahoo.com",
        password: "gabigabi123",
        username: "gabizinha_011",
        coins: 0,
        adm: false
    },
    {
        name: "Luiz Guimaraes",
        email: "lula@yahoo.com",
        password: "lulinha123",
        username: "lulinha_da_vg",
        coins: 0,
        adm: false
    },
    {
        name: "Antonio Oliveira",
        email: "toninho@yahoo.com",
        password: "tony123",
        username: "toninha_da_zn",
        coins: 0,
        adm: false
    }
];

// Create
function registerClient(name, email, password, username) {
    const newClient = new UserClient(name, email, password, username);
    listUser.push(newClient);
    return newClient;
}

// Read - listagens | filtros | buscar informacoes do usuario
function getAllUsers() {
    return listUser;
}

// Update 

// Delete

// Read
function getClientByUsername(username) {
    // buscando um usuario por username
    const user = listUser.find(client => client.username === username);
    console.log(user);
    return user;
}

// Faca uma funcao que edite os dados do client
// regra de negocio:
// 1. precisa receber os dados de login do client e os dados que serão alterados
// * valide se quiser os dados de login do client 
// caso login esteja errado retorne uma mensagem de dados invalidos *
function updateClient(username, password, newUsername) {
    let client = listUser.find(client => client.username == username && client.password == password)
    if(client){
        let clientIndex = listUser.findIndex(client => client.username == username);
        listUser[clientIndex].username = newUsername;
        return listUser[clientIndex];
     }else{
        return "Dados incorretos"
     }
}

// Faca uma funcao que altere a quantidade de coins de um cliente
// obs: somente um client adm pode inserir coins 
// regra de negocio:
// 1. adicionar de 10 em 10 coins
// 2. precisa receber os dados de login do adm e o username de quem receberá os coins
function updateCoins(email, password, username) {
    let adm = listUser.find(client => client.email == email && client.password == password)
    if(adm){
       let clientIndex = listUser.findIndex(client => client.username == username);
       listUser[clientIndex].coins = listUser[clientIndex].coins + 10;
       return listUser[clientIndex];
    }else{
       return "olha fulano vc nao autorizacao!!"
    }
}

// Faca uma funcao que delete um cliente
// regra de negocio:
// 1. receber o email e o password para deletar
function deleteClient(email, password) {
    let client = listUser.find(client => client.email == email && client.password == password)
    if(client){
        let clientIndex = listUser.findIndex(client => client.email == email);
        listUser.splice(clientIndex, 1)
        return listUser;
     }else{
        return "Dados incorretos!"
     }
}

// Faca um filtro que retorne os clientes com 
// emails (gmail e yahoo) validando com ".com" e sem
// regra de negocio:
// yahoo || yahoo.com
// gmail || gmail.com
// 1. retornar os emails com parametros "yahoo" | "yahoo.com" | "gmail" | "gmail.com"
function getAllClientsByRede(rede) {
    let usersByRede = listUser.filter(redeDesejada => redeDesejada.email.includes(rede))
    return usersByRede
}

// Faca um filtro que retorne os clientes 
// em ordem alfabetica utilizando como valores de parametro
// "asc" ou "desc"
function getAllUsersOrderBy(order) {
    if(order == "asc"){
        return listUser.map(listUser => listUser.name).sort()
    }else{
        return listUser.map(listUser => listUser.name).sort().reverse()
    }
}

export {
    registerClient,
    getClientByUsername,
    getAllUsers,
    getAllClientsByRede,
    getAllUsersOrderBy,
    updateClient,
    updateCoins,
    deleteClient
}