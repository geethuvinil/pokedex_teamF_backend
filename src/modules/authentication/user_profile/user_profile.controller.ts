import { Body, Controller, Get, Query } from '@nestjs/common';
import { UserProfileService } from '../services/user_profile/user_profile.service';

@Controller('user')
export class UserProfileController {
    constructor(private userProfileService:UserProfileService){}
    @Get('profile')
    async fetchDetails(@Query() userData){
         
    console.log(userData.email);
        return this.userProfileService.getUserDetails(userData.email)
    }


}