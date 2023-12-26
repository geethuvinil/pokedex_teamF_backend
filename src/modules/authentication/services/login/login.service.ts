import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';
import { SignupService } from '../signup/signup.service';
import { comparePasswords } from 'src/utils/bcrypt';
import { LoginDto } from '../../dto/login_dto';

@Injectable()

export class LoginService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        private signupService: SignupService
        // creating objects of userschema and signupservice
    ) { }
    async loginUser(userCredentials: LoginDto){
   
        const userObj = await this.userModel.findOne({ email: userCredentials.email}).exec();
        const response = {}
        console.log(userCredentials.email)
        if(!!userObj){
           const passwordMatches = comparePasswords(userCredentials.password, userObj.password)
           console.log('raw',userCredentials.password)
           console.log('hashed',userObj.password)
           if(passwordMatches){
            if(response['statusCode'] = 201){
                
                response['name'] = userObj.name
                /// response['name'] is similiar to response.name
                const token = await this.signupService.getTokens(userObj._id, userObj.email) 
                response['token'] = userObj._id
                return response
            }
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