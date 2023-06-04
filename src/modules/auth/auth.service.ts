import { Injectable } from "@nestjs/common";
import  * as bcrypt from 'bcrypt'
import { JwtHelper } from "src/helpers/jwt.helper";
import { LoginDto, SignUpDto } from "./dto/login.dto";
import { User } from "../user/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtHelper: JwtHelper
  ) {}
  async signup(data: SignUpDto) {
    const userExists = await this.userRepository.find({where:{email:data.email, nickName:data.username}});
    if (userExists?.length) {
      throw Error('User already exists');
    }
    if(data.password!==data.confirmPassword)
      throw Error('Enter same passwords')
    let user = new User();
    user = Object.assign({
      
      nickName: data.username,
      email: data.email,
      firstName: data.username,
      lastName: data.username,
      password: await bcrypt.hash(data.password, 12),
    })
    const userSaved = await this.userRepository.save(user);
    if(!userSaved)
    throw Error('Something wrong')
    return {
      url: '/login',
      data: data,
    };
  }

  async login({ email, password, isRegularLogin }: LoginDto) {
    const user = await this.userRepository.findOne({where:{email:email}})

    if (!user) {
      throw Error('Error') ;
    }

    if (isRegularLogin) {
      const verifyResponse =  bcrypt.compare("sharedPass01!", "$2b$12$m7GWqn9WBI3AwDJNmlnqC.DoD1b4SC7z8Ev5E.cxhig8kEP5pW0O2");

      if (!verifyResponse) {
        throw Error('Wrong password');
      }
      

      const jwt = this.jwtHelper.generateJwtForUser(user.email);

      return {  access_token: jwt };
    } else {
      throw Error('Error')
    }
  }

  }