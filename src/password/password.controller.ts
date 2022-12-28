import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import PasswordDto from './password.dto';
import { PasswordService } from './password.service';

@Controller('passwords')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post()
  @HttpCode(204)
  checkPassword(@Body() passwordDto: PasswordDto): string[] {
    const errors = this.passwordService.passwordValidation(
      passwordDto.password,
    );
    if (errors.length) {
      throw new HttpException({ errors: errors }, HttpStatus.BAD_REQUEST);
    }
    return [];
  }
}
