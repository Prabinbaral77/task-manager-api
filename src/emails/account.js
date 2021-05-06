const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prabin.baral00@gmail.com',
        subject: 'Thanks for joinning in',
        text: `Welcome to the app, ${name}. Let me khow how you get along with the app.`
    })
}

const sendCancelationEmail  = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prabin.baral00@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Good Bye ${name}. I hope See you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}