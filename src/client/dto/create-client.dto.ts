import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Address } from "../entities/address.entity"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"

export class CreateClientDto extends Address {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    age: number

}