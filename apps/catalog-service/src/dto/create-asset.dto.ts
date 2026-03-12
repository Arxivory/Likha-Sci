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
    price: number;

    @IsObject()
    metadata: Record<string, any>;
}