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
    console.log('00000',userEmail)
    const response = {}
    const userObj = await this.userModel.findOne({email:userEmail}).exec();
    console.log('jajajaj',userObj)
    if(!!userObj){
        console.log('33330',userObj)
        const data = {
            name: userObj.name,
            email: userObj.email,
            mobile: userObj.mobile
        }
response['statusCode'] = 201
response['message'] = 'User details found.'
response['userData']=data
//return userObj
 return response
    }
    response['statusCode'] = 409
    response['message'] = 'User details not found.'

    return response
    
}

    }

