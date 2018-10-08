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
var bodyData = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Quisque ullamcorper est ut volutpat volutpat.',
    'Proin condimentum orci a lorem dictum, ut mollis dolor lobortis.',
    'Nam id dolor vel ante lacinia ullamcorper.',
    'Mauris eu mi vitae diam gravida porta quis vitae tellus.'
];
var mailOptions = {
    from: 'youraddress@gmail.com',
    to:'yourfriendaddress@gmail.com',
    subject:'subject of mail',
    text:'text data',
};
// this loop send 100 mail in a minute
for(var i=0;i<100;i++){
    var randomIndex = Math.floor((Math.random() * (bodyData.length-1)) + 0);
    traspoter.sendMail(Object.assign({}, mailOptions, {text: bodyData[randomIndex]}),function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log('Email sent: '+info.response);
        }
    });
}
