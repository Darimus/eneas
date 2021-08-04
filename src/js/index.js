const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const port = 5500;

const user = '';
const pass = '' // Usar variavel de ambiente

app.use(express.urlencoded({ extended: false }));

app.post('/send', (request, response) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "465",
        auth: {user, pass}
    })

    const { namePaciente, emailPaciente, sobrePaciente } = request.body;

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: emailPaciente,
        subject: `Olá ${namePaciente}, seja bem vindo`,
        text: sobrePaciente
    }).then(info => {
        response.json('Email enviado').send(info)
    }).catch(error => {
        response.send(error)
    })
})

app.listen(port, () => console.log(`Runnig on port ${port}!`));