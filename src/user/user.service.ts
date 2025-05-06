import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async findUsers() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        password: false,
        addresses: true,
      },
    });
    return users;
  }

  async createUser(data: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new ConflictException('E-mail ja cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createUser = await this.prisma.user.create({
      data: {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
        addresses: {
          create: data.addresses,
        },
      },
    });

    return createUser;
  }

  async updateUser(id: number, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    const updateUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        lastName: data.lastName,
        password: data.password,
      },
    });

    return updateUser;
  }

  async deleteUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    const deleteUser = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return deleteUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userEmail = await this.prisma.user.findUnique({ where: { email } });
    return userEmail
  }
}
