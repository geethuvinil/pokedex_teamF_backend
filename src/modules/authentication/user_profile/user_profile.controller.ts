import { Body, Controller, Get } from '@nestjs/common';
import { UserProfileService } from '../services/user_profile/user_profile.service';

@Controller('user-profile-details')
export class UserProfileController {
    constructor(private userProfileService:UserProfileService){}
    @Get('fetch-profile_details')
    async fetchDetails(@Body() userEmail){
         
    console.log(userEmail);
        return this.userProfileService.getUserDetails(userEmail)
    }


}
