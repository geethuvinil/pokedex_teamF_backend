import { Controller, Body, Post } from '@nestjs/common';
import { ResetPasswordService } from '../services/reset_password/reset_password.service';


@Controller('resetPassword')
export class ResetPasswordController {

     constructor(private resetPasswordService: ResetPasswordService){}
    @Post('reset')
    async verifyEmail(@Body() credentials){
    console.log(credentials)
    return this.resetPasswordService.resetUserPassword(credentials)
}
} 