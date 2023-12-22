import { Body, Controller, Post } from '@nestjs/common';
import { ResendOtp } from '../services/resend_otp/resend_otp.service';


@Controller('resendOtp')
export class ResendOtpController {
    constructor(private resendOtpService:ResendOtp){}
    @Post('resend-otp')
async resendOtp(@Body() user){
     
console.log(user);
    return this.resendOtpService.resendOtp(user.email)
}
}