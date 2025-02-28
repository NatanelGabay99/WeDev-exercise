import { Router } from 'express';
import { postItem } from '../controllers/shop.controller';

const shopRoutes = Router();

// Route to post new product
shopRoutes.post('/', postItem);


export default shopRoutes;
