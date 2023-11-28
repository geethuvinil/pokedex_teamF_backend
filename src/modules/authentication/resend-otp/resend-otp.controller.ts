import { Body, Controller, Post } from '@nestjs/common';
import { ResendOtpService } from '../services/resend-otp/resend-otp.service';

@Controller('resendOtp')
export class ResendOtpController {
    constructor(private resendOtpService:ResendOtpService){}
    @Post('resend-otp')
async resendOtp(@Body() user){
     
console.log(user);
    return this.resendOtpService.resendOtp(user.email)
}
}
