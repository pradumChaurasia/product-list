import express from 'express';
import Product from '../models/products';
const router = express.Router();


router.post('/products', async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(200).send(product);
    }
    catch (error) {
        res.status(404).send(error)
    }
})

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/updateproducts/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, { name, price, description }, { new: true });
        res.json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
})


router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Failed to delete product' });
    }
  });


export default router;