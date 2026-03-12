import { IsString, IsEnum, IsNumber,
    IsOptional, IsObject
} from 'class-validator';

enum Domain {
    Engineering = 'Engineering',
    MedTech = 'MedTech',
    DataScience = 'DataScience'
}

export class CreateAssetDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsEnum(Domain)
    domain: Domain;

    @IsNumber()
    price: Number;

    @IsObject()
    metadata: Record<string, any>;
}