import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';
import { findIndex } from 'rxjs';
@Injectable()
export class FavoriteService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>

    ) { }
    async addToFavorites(details: string) {
        console.log('datas are ', details['email'], details['pokeName'])
        const userObj = await this.userModel.findOne({ email: details['email'] }).exec();
        const response = {}


        if (!!userObj) {
            console.log('user found')
          
                await userObj.favCharacters.push(details['pokeName'])
                console.log('current values == ', userObj.favCharacters)

              await  userObj.save()
                console.log('fafaffa', userObj)
                response['statusCode'] = 201
                response['message'] = 'Added to favorites'

                return response
            
           

        }
        response['statusCode'] = 500
        response['message'] = 'Something went wrong.'

        return response
    }


    async removeFromFavorites(details: string) {
        console.log('datas are ', details['email'], details['pokeName'])
        const userObj = await this.userModel.findOne({ email: details['email'] }).exec();
        const response = {}
        console.log('@@@@@', userObj)
        console.log('favorite service1 entered')

        if (!!userObj) {
            const character = await this.userModel.findOne({ favCharacters: details['pokeName'] }).exec();

            if (!!character) {
                console.log('is character', character)
                console.log('user found')
                console.log('datas are ', details['email'], details['pokeName'])
               const index =   userObj.favCharacters.indexOf(details['pokeName'])
               if(index!= -1){
                userObj.favCharacters.splice(index,1)
                userObj.save()
               }


                await userObj.save()
                console.log('fafaffa', userObj)
                response['statusCode'] = 201
                response['message'] = 'Removed from favorites'

                return response
            }

        }
        response['statusCode'] = 409
        response['message'] = 'Something went wrong.'

        return response
    }

    async fetchFavorites(userEmailId: string) {
        const userObj = await this.userModel.findOne({ email: userEmailId}).exec();
        const response = {}
        console.log(!!userObj,userEmailId)
        if (!!userObj) {
            console.log('user found')
            if (userObj.favCharacters.length > 0) {
                console.log('enteredddd')
                response['statusCode'] = 201
                response['message'] = 'Favorites listed successfully'
                response['data'] = userObj.favCharacters
                return response
            }
            response['statusCode'] = 409
            response['message'] = 'Fav list is empty'
            return response
        }
        response['statusCode'] = 500
        response['message'] = 'Fetching Favorites List failed'
        return response

    }

    async isFavoriteOrNot(userData:string){
        const userObj = await this.userModel.findOne({ email: userData['email']}).exec();
        const response = {}
        console.log(userData['email'])
        console.log('id value==',userData['characterId'])
        if(!!userObj){
            const isFavorite = userObj.favCharacters.includes(userData['characterId'])
            console.log('isFav',isFavorite)
            if(!!isFavorite){
                response['statusCode'] = 201
                response['message'] = 'Found in favorite list'
                response['isFavoriteValue'] = 'yes'
                return response
            }
            response['statusCode'] =500
            response['message'] = 'Not found in favorite list'
            response['isFavoriteValue'] = 'no'
            return response
        }
    }
}
