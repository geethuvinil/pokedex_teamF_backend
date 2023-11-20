import { Module } from '@nestjs/common';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './services/signup/signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { LoginController } from './login/login.controller';
import { LoginService } from './services/login/login.service';
import { ResetPasswordController } from './reset-password/reset-password.controller';
import { ResetPasswordService } from './services/reset-password/reset-password.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: userSchema}])],
  // this import allows all the below controllers to access the userSchema
  controllers: [SignupController, LoginController, ResetPasswordController],
  providers: [SignupService, LoginService, ResetPasswordService]
})
export class AuthenticationModule {}
