import { PartialType } from '@nestjs/mapped-types';
import { Address } from '../entities/address.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(Address) {

    @IsOptional()
    @ApiProperty()
    @IsString()
    name: string

    @IsOptional()
    @ApiProperty()
    @IsNumber()
    age: number

    @ApiProperty()
    postalCode: string

    @ApiProperty()
    street: string

    @ApiProperty()
    number: number

    @ApiProperty()
    complement: string

    @ApiProperty()
    city: string

    @ApiProperty()
    state: string
}
