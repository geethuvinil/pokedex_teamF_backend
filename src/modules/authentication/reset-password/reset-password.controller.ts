import { Body, Controller, Post } from '@nestjs/common';
import { ResetPasswordService } from '../services/reset-password/reset-password.service';

@Controller('resetPassword')
export class ResetPasswordController {
    constructor(private resetPasswordService: ResetPasswordService){}
    @Post()
async reset(@Body() newPasswordDetails){
     

    return this.resetPasswordService.resetPassword(newPasswordDetails)
}
}
