import {Router} from 'express';

const router = Router();

import { getProducts, addProduct, deleteProduct, editProduct } from '../controllers/productController.js';

//Add methods from controller here:
router.get('/', getProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', editProduct);

export default router;