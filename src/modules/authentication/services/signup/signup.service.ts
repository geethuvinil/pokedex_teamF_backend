import { Injectable } from '@nestjs/common';
import { User } from '../../schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { encodePassword } from 'src/utils/bcrypt';


@Injectable()
export class SignupService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }
    // the above constructor is used to get all the parameters in userschema
    generateOtp() {
        const min = 10000;
        const max = 99999;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
   
    async isEmailExist(email: string) {
        const user = await this.userModel.findOne({ email }).exec();
        return !!user
        // !! is used to check whether it is true or false
    }

    async createUser(userData: User){
        // userData is a variable that has name,email,phone,password initially.
        const response = {}
        const password = encodePassword(userData.password);
        console.log(password)
        // response is an empty object which will be used later
        const emailTaken = await this.isEmailExist(userData.email)
        // callling the function isEmailExist to check whether the email is already present or not,
        // bu comparing the email that the user has typed.
        // Now the emailTaken variable will have avalue either true or false.
        if (!emailTaken) {
            // if the value of emailTaken is false, user need to be created.
           /// const newOtp = this.generateOtp();
            // creating an otp and will be stored in newOtp to store in DB.
           /// userData.emailOtp = newOtp
            // now we need to save this otp to the db. So keep it in userData.emailOtp.
           
            const newUser = await this.userModel.create(userData);
            // creating newUser in Db using create function. Now the db has name,email,phone,password, and otp.
            //newUser['status'] = 'email verification pending'
         newUser.password= password
            newUser.save()
            // saving everything in db
            response['statusCode'] = 201
            response['message'] = 'Registration Succesfull.'

            return response
            // if this user is new the above message will be shown.
            // In frontend check with status code and display the message.
        }

        response['statusCode'] = 409
        response['message'] = 'Email already taken.'

        return response
// if the email is already present the above message will be shown.
 // In frontend check with status code and display the message.
    }
}
