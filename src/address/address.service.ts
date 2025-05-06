import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async updateAddress(
    userId: number,
    addressId: number,
    data: UpdateAddressDto,
  ) {
    const address = await this.prisma.adress.findFirst({
      where: {
        id: addressId,
        userId,
      },
    });

    if (!address) {
      throw new NotFoundException('Endereço não encontrado para este usuário.');
    }

    const updateAddress = await this.prisma.adress.update({
      where: {
        id: addressId,
      },
      data,
    });

    return updateAddress;
  }
}
