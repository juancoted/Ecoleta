import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response){
        const items = await knex('items').select('*');
    
        //processo de transformação dos dados para um formato mais acessivel
        const serializedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.136:3333/uploads/${item.image}`,
            };
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;