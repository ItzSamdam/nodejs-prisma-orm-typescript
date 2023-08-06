import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/httpException';
import { User } from '@interfaces/users.interface';

@Service()
export class UsersService {
    public user = new PrismaClient().user;

    public async findAllUser(): Promise<User[]> {
      return this.user.findMany();
    }

    public async findUserById(userId: number): Promise<User> {
        const findUser: User = await this.user.findUnique({ where: { id: userId } });
        if (!findUser) throw new HttpException(409, "User doesn't exist");

        return findUser;
    }

    public async createUser(userData: CreateUserDto): Promise<User> {
        const findUser: User = await this.user.findUnique({ where: { email: userData.email } });
        if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

        const hashedPassword = await hash(userData.password, 10);
      return this.user.create({data: {...userData, password: hashedPassword}});
    }

    public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
        const findUser: User = await this.user.findUnique({ where: { id: userId } });
        if (!findUser) throw new HttpException(409, "User doesn't exist");

        const hashedPassword = await hash(userData.password, 10);
      return this.user.update({where: {id: userId}, data: {...userData, password: hashedPassword}});
    }

    public async deleteUser(userId: number): Promise<User> {
        const findUser: User = await this.user.findUnique({ where: { id: userId } });
        if (!findUser) throw new HttpException(409, "User doesn't exist");

        return this.user.delete({where: {id: userId}});
    }
}
