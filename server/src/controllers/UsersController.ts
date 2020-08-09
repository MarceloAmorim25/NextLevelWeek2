import {Request, Response} from 'express'
import db from '../database/connection';

export default class UsersController {

    async index(request: Request, response: Response){
        
        const totalUsers = await db('users').count('* as total');
    
        const { total } = totalUsers[0];
    
        return response.json({ total });
    
    }
      
    async create(request: Request, response: Response){

        const {    

            name,
            avatar,
            password,

        } = request.body;
         
        await db('users').insert({

            name,
            avatar,
            password,
            
        })
    
        return response.status(201).send();
    }


    async update(request: Request, response: Response){
    
        const {user_id} = request.body;
    
        await db('connections').update({
            user_id,
        })
    
        return response.status(201).send();
    }


}




