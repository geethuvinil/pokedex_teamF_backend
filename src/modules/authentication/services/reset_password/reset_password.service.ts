import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../../Schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class ResetPasswordService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }

    async verifyEmail(email: string) {
        const response = {}
        const userObj = await this.userModel.findOne({ email }).exec();
        if (!!userObj) {
            response['statusCode'] = 201
            response['message'] = 'Email Exist'
            return response
        }
        else{
            response['statusCode'] = 404
            response['message'] = 'Email Not Found'
            return response
        }
    }

    async resetUserPassword(credentials){
        const email = credentials.email
        const userObj = await this.userModel.findOne({ email });
        const response = {}
        console.log(credentials.password,'88888888');
        
        if(!!userObj){
            userObj.password = credentials.password
            userObj.save()
            response['statusCode'] = 201
        }
        else{
             response['statusCode'] = 402

        }
        console.log(response);
        

        return response
    }
}