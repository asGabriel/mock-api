import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class Address {
    @ApiProperty()
    @IsNotEmpty()
    postalCode: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    street: string

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    number: number

    @ApiProperty()
    @IsOptional()
    complement: string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    state: string
}