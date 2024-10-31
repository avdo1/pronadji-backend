import { ApiOperation } from "@nestjs/swagger";
import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, SignUpDto } from "./dto/login.dto";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  @ApiOperation({
    summary: "User signup",
    tags: ["auth"],
    description: "Used for local user signup with email + password combo. Returns a JWT token as a response.",
  })
  async signup(@Body() signupDto: SignUpDto) {
    return this.authService.signup(signupDto);
  }

  @Post("/login")
  @ApiOperation({
    summary: "User login",
    tags: ["auth"],
    description: "Used for local login signup with email + password combo. Returns a JWT token as a response.",
  })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
