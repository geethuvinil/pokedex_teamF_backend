import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../Schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class ForgotPasswordService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }

    async checkEmail(email: string) {
        const userObj = await this.userModel.findOne({ email: email }).exec();
        const  response = {}
        console.log(userObj);
        console.log('9999999999999999');
        
        
        if(!!userObj){
             response['statusCode'] = 201
             response['userId'] = 201

        }
        else{
            response['statusCode'] = 404
        }
        return response

    }

}