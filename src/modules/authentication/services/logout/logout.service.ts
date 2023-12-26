import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../Schema/user.schema';
import mongoose from 'mongoose';


@Injectable()
export class LogoutService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
        
         
    ) { }

    async logout(requestedUserId){

        try {
            await this.userModel.updateOne(
              { _id: requestedUserId },
              { $set: { refreshToken: null } }
            );
            return { success: true, message: 'Logout successful' };
          } catch (error) {
            console.error('Logout failed', error);
            return { success: false, message: 'Logout failed' };
          }
    }       
}
 