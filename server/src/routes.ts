import express from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router()

const pointsController = new PointsController(); //instanciando a class PointsController
const itemsController = new ItemsController(); //instanciando a class ItemsController

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index ); 
routes.get('/points/:id', pointsController.show );


export default routes;