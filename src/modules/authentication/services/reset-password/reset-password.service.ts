import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schema/user.schema';
import mongoose from 'mongoose';

@Injectable()
export class ResetPasswordService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }
    async resetPassword(email: string) {
        const response = {}
        const userObj = await this.userModel.findOne({ email }).exec();
        if (!!userObj) {
            // now value of userObj is true
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
}
