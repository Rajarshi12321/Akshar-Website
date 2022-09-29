
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

require('dotenv/config');

let SENDER_USER_PASSWORD = process.env.MAIL_APP_PASSWORD;


module.exports = function send_email(subject,body,recipent){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'braincells.aarkss@gmail.com',
          pass: SENDER_USER_PASSWORD
        }
      });

      const handlebarOptions = {
        viewEngine: {
            extName: '.handlebars',
            partialsDir : path.resolve('./views'),
            defaultLayout : false
        },
        viewPath: path.resolve('./views'),
        extName : '.handlebars'
      }
    
    transporter.use('compile',hbs(handlebarOptions));

    var mailOptions = {
        
        from: 'braincells.aarkss@gmail.com',
        to: recipent,
        subject:subject,
        template: 'emailTemplate',
        context :{
            resetLink: body
        }
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });

}



