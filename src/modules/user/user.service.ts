import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ContextService } from "src/core/context/context.service";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly contextService: ContextService,
  ) {}

  async getOneByEmail(email: string) {
    return this.repository.findOne({ where: { email: email } });
  }
  async findAll() {
    return this.repository.find();
  }

  async getMe() {
    const user = this.contextService.userContext.user;

    const userFromDatabase = await this.repository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.mainLocals", "mainLocal")
      .select(["user", "mainLocal.id"])
      .where("user.email = :email", { email: user?.email })
      .getOne();

    return userFromDatabase;
  }

  async create(createUserDto: CreateUserDto) {
    const response = this.repository.create(createUserDto);
    if (!response) throw Error("Something wrong");

    return this.repository.save(response);
  }
  async findOne(id: string) {
    return this.repository.findOne({ where: { id: id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userFromDatabase = await this.repository.findOne({
      where: { id: id },
    });
    const updatedUser = Object.assign(userFromDatabase, updateUserDto);
    return this.repository.update(id, updatedUser);
  }

  async remove(id: string) {
    const user = this.repository.findOne({ where: { id: id } });
    return await this.repository.delete(id);
  }
}
