import { Controller, Get, Query} from '@nestjs/common';
import { ForgotPasswordService } from '../services/forgot-password/forgot-password.service';


@Controller('forgot-password')
export class ForgotPasswordController {

constructor(private forgotPasswordService: ForgotPasswordService){}
    
    @Get('check-email')
    async createUSer(@Query() query: String) {
        
        const userEmail = query['email']
 
        return this.forgotPasswordService.checkEmail(userEmail)
    }
}