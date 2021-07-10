import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('/me')
  me() {
    return {
      resultCode: 0,
      data: { userId: 0, email: 'bbb@gfffl.com', login: 'fff=))' },
    };
  }

  @Post('/login')
  login() {
    return { resultCode: 0 };
  }

  @Delete('/logout')
  logout() {
    return { resultCode: 0 };
  }
}
