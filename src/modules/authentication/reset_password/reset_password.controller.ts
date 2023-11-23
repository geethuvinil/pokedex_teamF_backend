import { Controller, Body, Post } from '@nestjs/common';
import { PasswordResetService } from '../services/reset_password/reset_password.service';


@Controller('password')
export class PasswordResetController {

     constructor(private passwordResetService: PasswordResetService){}
    @Post('reset')
    async verifyEmail(@Body() credentials){
    console.log(credentials)
    return this.passwordResetService.resetUserPassword(credentials)
}
}