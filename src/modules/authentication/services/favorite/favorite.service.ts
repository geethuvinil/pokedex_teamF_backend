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
            const isExist = await userObj.favCharacters.includes(details['pokeName'])
            console.log('isExist value', isExist, userObj.favCharacters)
            if (!isExist) {
                await userObj.favCharacters.push(details['pokeName'])
                console.log('current values == ', userObj.favCharacters)

                userObj.save()
                console.log('fafaffa', userObj)
                response['statusCode'] = 201
                response['message'] = 'Added to favorites'

                return response
            }
            response['statusCode'] = 409
            response['message'] = 'Already added to favorites'
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


                userObj.save()
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

    async fetchFavorites(details: string) {
        const userObj = await this.userModel.findOne({ email: details['email'] }).exec();
        const response = {}
        console.log(!!userObj,details['email'])
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

}
