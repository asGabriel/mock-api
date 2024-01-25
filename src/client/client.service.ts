import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { IClient } from './entities/IClient.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class ClientService {
  private clients: IClient[] = [
    {
      id: randomUUID(),
      name: "Mock Person",
      age: 100,
      address: {
        postalCode: "12200000",
        city: "Mock api city",
        number: 200,
        state: "Kcom",
        complement: "",
        street: "Mock street"
      }
    }
  ];

  create(createClientDto: CreateClientDto) {
    const uuid = randomUUID();

    const newClient = {
      id: uuid,
      name: createClientDto.name,
      age: createClientDto.age,
      address: {
        postalCode: createClientDto.postalCode,
        city: createClientDto.city,
        street: createClientDto.street,
        state: createClientDto.state,
        complement: createClientDto.complement,
        number: createClientDto.number
      },
    } as IClient

    this.clients.push(newClient);
    const checkedNewClient = this.checkIfExists(uuid);
    
    return checkedNewClient;
  }
  
  findAll() {
    return this.clients;
  }

  findOne(id: string) {
    try {
      const client = this.checkIfExists(id);
      
      return client;
    } catch (error) {
      throw new NotFoundException("error to find client")
    }

  }

  update(id: string, updateClientDto: UpdateClientDto) {
    const client = this.checkIfExists(id);

    const updatedClient = {
      id: id,
      name: updateClientDto.name || client[0].name,
      age: updateClientDto.age || client[0].age,
      address: {
        postalCode: updateClientDto.postalCode || client[0].address.postalCode,
        city: updateClientDto.city || client[0].address.city,
        number: updateClientDto.number || client[0].address.number,
        state: updateClientDto.state || client[0].address.state,
        complement: updateClientDto.complement || client[0].address.complement,
        street: updateClientDto.street || client[0].address.street
      } 
    }

    this.clients = this.clients.filter((cli) => cli.id !== id);
    this.clients.push(updatedClient);

    return `client id: ${id} has been updated`;
  }

  remove(id: string) {
    const client = this.checkIfExists(id)

    this.clients = this.clients.filter((cli) => cli.id !== id);
    return `client id: ${id} has been removed`;
  }

  private checkIfExists(id: string) {
    try {
      const client = this.clients.filter(
        (person) => {
          return person.id === id
        }
      )
  
      if(client.length === 0) throw new NotFoundException();
      return client
      
    } catch (error) {
      throw new NotFoundException(`the id ${id} doesnt exists.`)
    }
  }
}
