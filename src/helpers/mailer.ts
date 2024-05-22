import nodemailer from 'nodemailer'

export const sendEmail = async({email, emailType, userID}
    :any
) =>
    {
        try{
            //TODO config mail for usage 

            const transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                  user: "kivous@outlook.email",
                  pass: "jn7jnAPss4f63QBp6D",
                },
              });

              const mailOptions= {
                from: 'kivous@gmail.com', // sender address
                to: email, // list of receivers
                subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", 
                html: "<b>Hello world?</b>", // html body
              }

              const mailResponse = await transporter.sendMail(mailOptions)
              return mailOptions
        }
        catch(error:any)
        {
            throw new Error(error.message);
        }
    }