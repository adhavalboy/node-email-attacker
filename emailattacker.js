/*
Node email attacker
created by:
Dhavalkumar Prajapati
*/

var nodemailer = require('nodemailer'); // npm lib
var traspoter = nodemailer.createTransport({
    service: 'gmail',//name the mail server which are using
    auth: {
        user: 'youraddress@gmail.com', //from which address you want to send mail
        pass: 'your password' // your mail address pass word
    }
});
var mailOptions = {
    from: 'youraddress@gmail.com',
    to:'yourfriendaddress@gmail.com',
    subject:'subject of mail',
    text:'text data',
};
// this loop send 100 mail in a minute
for(var i=0;i<100;i++){
traspoter.sendMail(mailOptions,function(error, info){
    if (error){
        console.log(error);
    } else {
        console.log('Email sent: '+info.response);
    }
});
}
