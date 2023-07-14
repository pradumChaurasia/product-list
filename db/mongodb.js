
// 7lKKIskIhsHKq2gk
// pradum19441
import mongoose from 'mongoose';

const mongoURL='mongodb+srv://pradum19441:7lKKIskIhsHKq2gk@cluster0.jk98bv5.mongodb.net/?retryWrites=true&w=majority'
const dbName='product-list'
 export async function connectToDatabase(){
    try{
        await mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true })
        
        console.log('connected to mongoDB')
    }
    catch(error){
        console.log('Error connecting to mongoDB',error)
    }
}

