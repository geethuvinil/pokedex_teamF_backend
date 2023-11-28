import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';
@Injectable()
export class ResendOtpService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }
  
    async resendOtp(email:string){
        const userObj = await this.userModel.findOne({ email: email }).exec();
       const response = {}
       console.log(userObj)
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
