import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from '../services/signup/signup.service';

@Controller('signup')
// 'signup' will be given in postman after '/'
export class SignupController {
    constructor(private signupService: SignupService){}
    @Post()
async createUSer(@Body() userDetails){
     

    return this.signupService.createUser(userDetails)
}
}
