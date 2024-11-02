const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'YOUR MAIL',
            pass: 'YOUR APP PASS KEY'
        }
    }
);

const mailOptions = {
    from: 'YOUR MAIL',
    to:['RECIEVER_MAIL1,RECIEVER_MAIL2'],
    subject:'test mail',
    text:'This is a sample mail sending from my node server'
}


transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(`error occured sending mail ${err.message}`);
        
    }
    else{
        console.log('mail send successfully');
        
    }
});