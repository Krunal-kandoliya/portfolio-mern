const nodemailer=require('nodemailer')
const sendEmailController=async(req,res)=>{


try {

let transporter=await nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user: 'ethelyn.legros@ethereal.email',
        pass: 'ECtu1tCpx7Rb2hySt1'
    },
});

// let info = await transporter.sendMail({
//     from: '"krunal 👻" <ethelyn.legros@ethereal.email>',
//     to: "krunaldkandoliya@gmail.com",
//     subject: "Hello ✔",
//     text: "Hello world",
//     html: "<b>Hello world?</b>",
//   });

const{name,email,msg}=req.body

if(!name || !email || !msg){
    return res.status(500).send({
        success:false,
        message:"please Provide All the Fields"
    })
}
transporter.sendMail({
    to:"krunaldkandoliya@gmail.com",
    from:'"krunal 👻" <ethelyn.legros@ethereal.email>',
    subject:"krunal portfolio",
    html:`<h5>Details information</h5>
    <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Message: ${msg}</li>
    </ul>
    `
})
    return res.status(200).send({
        success:true,
        message:"Your MEssage Sent Succesfull"
      
    })
} catch (error) {
   console.log(error) 
   return res.status(500).send({
    success:false,
    message:"Send Email API ERROR"
   })
}
}

module.exports={sendEmailController}