import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserStatusDto } from './dto/updateUserStatus.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query('page') page: number, @Query('count') count: number) {
    return this.usersService.getUsers(page, count);
  }

  @Post('/follow/:id')
  followUser(@Param('id') userId: number) {
    this.usersService.followUser(userId);
    return { resultCode: 0 };
  }

  @Post('/unfollow/:id')
  unfollowUser(@Param('id') userId: number) {
    this.usersService.unfollowUser(userId);
    return { resultCode: 0 };
  }

  @Get('/profile/:id')
  getProfile(@Param('id') userId: number) {
    return this.usersService.getProfile(userId);
  }

  @Get('/profile/status/:id')
  getUserStatus(@Param('id') userId: number) {
    const userStatus = this.usersService.getUserStatus(userId);
    return { resultCode: 0, userStatus };
  }

  @Put('/profile/status/:id')
  updateUserStatus(
    @Param('id') userId: number,
    @Body() dto: UpdateUserStatusDto,
  ) {
    const userStatus = this.usersService.updateUserStatus(userId, dto.status);
    return { resultCode: 0, userStatus };
  }

  @Put('/profile/photo')
  updateUserPhoto() {
    return {
      resultCode: 0,
      photos: {
        small:
          'https://softensy.com/wp-content/uploads/2020/06/golang-advantages-and-disadvantages.png',
      },
    };
  }
}
