const nodemailer = require('nodemailer')

const transportet = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'danila281105@mail.ru',
            pass: 'n3uihJ14KJEzcBPmY7Ub'
        }
    },
    {
        from: '<danila281105@mail.ru>',
    }
)
const mailer = message=>{
    transportet.sendMail(message, (err,info)=>{
        if(err) return console.log(err)
        console.log('Email sent:' , info)
    })
}

module.exports = mailer 