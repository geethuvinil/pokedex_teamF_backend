import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';
@Injectable()
export class FavoriteService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
       
    ){}
    async addToFavorites(details:string){
        console.log('datas are ',details['email'],details['pokeName'])
        const userObj = await this.userModel.findOne({ email: details['email'] }).exec();
        const response = {}
        console.log('@@@@@',userObj)
       console.log('favorite service1 entered')
        
        if(!!userObj){

            console.log('user found')
        console.log('datas are ',details['email'],details['pokeName'])
 await userObj.favCharacters.push(details['pokeName'])


userObj.save()
                console.log('fafaffa',userObj)
                response['statusCode'] = 201
                response['message'] = 'Added to favorites'
       
                return response
            }
            response['statusCode'] = 409
            response['message'] = 'Something went wrong.'
    
            return response
        }
        

        async removeFromFavorites(details:string){
            console.log('datas are ',details['email'],details['pokeName'])
            const userObj = await this.userModel.findOne({ email: details['email'] }).exec();
            const response = {}
            console.log('@@@@@',userObj)
           console.log('favorite service1 entered')
            
            if(!!userObj){
    
                console.log('user found')
            console.log('datas are ',details['email'],details['pokeName'])
     await userObj.favCharacters.splice(details['pokeName'])
    
    
    userObj.save()
                    console.log('fafaffa',userObj)
                    response['statusCode'] = 201
                    response['message'] = 'Added to favorites'
           
                    return response
                }
                response['statusCode'] = 409
                response['message'] = 'Something went wrong.'
        
                return response
            }

    
}
