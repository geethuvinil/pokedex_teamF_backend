import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './services/signup/signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { LoginController } from './login/login.controller';
import { LoginService } from './services/login/login.service';
import { ForgotPasswordController } from './forgot-password/forgot-password.controller';
import { ForgotPasswordService } from './services/forgot-password/forgot-password.service';


import { CheckEmailService } from './services/check_email/check_email.service';

import { PasswordResetService } from './services/reset_password/reset_password.service';
import { UserProfileController } from './user_profile/user_profile.controller';
import { UserProfileService } from './services/user_profile/user_profile.service';
import { PasswordResetController } from './reset_password/reset_password.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: userSchema}]),],
  // this import allows all the below controllers to access the userSchema
  controllers: [SignupController, LoginController, ForgotPasswordController, PasswordResetController, UserProfileController],
  providers: [SignupService, LoginService, ForgotPasswordService, PasswordResetService, UserProfileService]
})
export class AuthenticationModule {}
