import { Request, Response } from 'express';
import axios from 'axios';
import { ACCESS_KEY_SHOPIFY } from '../utils/environment-variables';

// Post new item
export const postItem = async (req: Request, res: Response) => {
	try {
		const productData = {
			product: {
				title: req.body.title || 'New Product',
				body_html: req.body.description || 'Product description',
				vendor: req.body.vendor || 'Your Brand',
				product_type: req.body.type || 'General',
				variants: [
					{
						price: req.body.price || '19.99',
						sku: req.body.sku || 'SKU001',
					},
				],
			},
		};

		const postProduct = await axios.post(
			`https://3fvhxt-ch.myshopify.com/admin/api/2025-01/products.json`,
			productData,
			{
				headers: {
					'X-Shopify-Access-Token': ACCESS_KEY_SHOPIFY,
					'Content-Type': 'application/json',
				},
			}
		);

		res.json(postProduct.data);
	} catch (error) {
		res.status(500).json({ message: 'Could not post new item', error });
	}
};
