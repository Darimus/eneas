const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 5500;

const user = 'bruno.frontend0304@gmail.com';
const pass = '' // Usar variavel de ambiente

const formEmail = document.getElementById("form-email").value;
const formName = document.getElementById("form-name").value;
const textArea = document.getElementById("form-text-area").value;

app.get('/', (request, response) => response.send('Hello World!!'));

app.get('/send', (resquest, response) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "465",
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: 'bruno.passos@outlook.com.br',
        subject: 'Olá, seja bem vindo',
        text: 'Olá, muito obrigado por funcionar... ou não'
    }).then(info => {
        response.json('Email enviado').send(info)
    }).catch(error => {
        response.send(error)
    })
})

app.listen(port, () => console.log(`Runnig on port ${port}!`));