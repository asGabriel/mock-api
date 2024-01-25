import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('client')
@ApiTags("client")
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  private readonly logger = new Logger();

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    this.logger.log(`creating client ${createClientDto.name}`);
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll() {
    this.logger.log("get all clients");
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log("get client by id");
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    this.logger.log("updating client");
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.logger.log("removing client");
    return this.clientService.remove(id);
  }
}
