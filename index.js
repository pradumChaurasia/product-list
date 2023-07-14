import express, {json} from 'express';
import router from './router/product.js';
import { connectToDatabase} from './db/mongodb.js';

const app = express();
app.use(json())




const port=process.env.PORT || 7000

const startServer = async () => {
    try {
      await connectToDatabase();
      console.log('Connected to MongoDB');
      
      app.use('/',router)
  
      // Start the server
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error('Error connecting to MongoDB or inserting fake data:', error);
    }
  };
  
  startServer();
  
  

