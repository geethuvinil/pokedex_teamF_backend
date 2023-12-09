import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../Schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class UserProfileService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }

   async getUserDetails(userEmail:string){
    const response = {}
    const userObj = await this.userModel.findOne({ userEmail}).exec();
    console.log('jajajaj',userEmail)
    if(!!userObj){
response['statusCode'] =201
response['message'] = 'User details found.'
//return userObj
 return response
    }
    response['statusCode'] = 409
    response['message'] = 'User details not found.'

    return response
    
}

    }


