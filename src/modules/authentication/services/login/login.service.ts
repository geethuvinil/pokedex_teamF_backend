import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';
import { SignupService } from '../signup/signup.service';

@Injectable()

export class LoginService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        private signupService: SignupService
        // creating objects of userschema and signupservice
    ) { }
    async loginUser(loginCredentials: User){
        
        const userObj = await this.userModel.findOne({ email: loginCredentials.email, password: loginCredentials.password }).exec();
        const response = {}
         
        if(!!userObj){
           
            if(response['statusCode'] = 201){
                
                response['name'] = userObj.name
                /// response['name'] is similiar to response.name
                
                response['token'] = userObj._id
                return response
            }
            
            // response['statusCode'] = 502
            // response['email'] = userObj.email
            // const newOtp = this.signupService.generateOtp()
            // userObj.emailOtp = newOtp
            // userObj.save()
            
            
            // response['message'] = 'Email not verified'
            // return response
           
        }

        response['statusCode'] = 404
        response['message'] = 'User name or password incorrect'
        return response
        

    }
}
