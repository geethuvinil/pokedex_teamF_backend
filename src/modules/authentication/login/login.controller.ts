import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../services/login/login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){}
    @Post()
async login(@Body() loginDetails){
     

    return this.loginService.loginUser(loginDetails)
}
}
