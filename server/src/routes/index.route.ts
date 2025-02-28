import { Router } from 'express';
import { AppConfig } from '../config/app.config';
import shopRoutes from './shop.route';

const indexRoute = Router();

indexRoute.use(AppConfig.apiUrl.shop, shopRoutes);

export default indexRoute;
