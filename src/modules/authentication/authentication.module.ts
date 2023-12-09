import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './services/signup/signup.service';

import { userSchema } from './schema/user.schema';
import { LoginController } from './login/login.controller';
import { LoginService } from './services/login/login.service';
import { ForgotPasswordController } from './forgot-password/forgot-password.controller';
import { ForgotPasswordService } from './services/forgot-password/forgot-password.service';


import { CheckEmailService } from './services/check_email/check_email.service';
import { ResetPasswordService } from './services/reset_password/reset_password.service';
import { ResetPasswordController } from './reset_password/reset_password.controller';

import { ResendOtpController } from './resend-otp/resend-otp.controller';
import { ResendOtpService } from './services/resend-otp/resend-otp.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UserProfileController } from './user_profile/user_profile.controller';
import { UserProfileService } from './services/user_profile/user_profile.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),],
  // this import allows all the below controllers to access the userSchema
  controllers: [SignupController, LoginController, ForgotPasswordController, ResetPasswordController, ResendOtpController, UserProfileController],
  providers: [SignupService, LoginService, ForgotPasswordService, ResetPasswordService, ResendOtpService, UserProfileService]
})
export class AuthenticationModule { }
