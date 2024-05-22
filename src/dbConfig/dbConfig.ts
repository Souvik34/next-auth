import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)

        const connection = mongoose.connection 

        connection.on('connected',() =>{
            console.log('Mongodb Connected');
        })

        connection.on('error', (err) => {
            console.log('Mongodb connection error' + err);
            process.exit()
        })
    }
    catch(error)
    {
        console.log('Something went wrong in connecting with database');
        console.log(error);
    }
}