import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';
import { AddressService } from './address.service';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('users/:userId/addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Put(':addressId')
  async updateAddress(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('addressId', ParseIntPipe) addressId: number,
    @Body() data: UpdateAddressDto,
  ) {
    return this.addressService.updateAddress(userId, addressId, data);
  }
}
