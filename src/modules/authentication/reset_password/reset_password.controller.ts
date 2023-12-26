import { Controller, Body, Post, Req, UseGuards } from '@nestjs/common';
import { PasswordResetService } from '../services/reset_password/reset_password.service';
import { AccessTokenGuard } from '../guards/access_token_guard/access_token_guard.guard';


@Controller('password')
export class PasswordResetController {

     constructor(private passwordResetService: PasswordResetService){}
     @Post('reset')
     @UseGuards(AccessTokenGuard)
     async passwordReset(@Req() req: Request, @Body() reqBody) {
        const email = req['user'].email
        console.log(reqBody, email);
    return this.passwordResetService.resetUserPassword(email, reqBody.newPassword)
}
}