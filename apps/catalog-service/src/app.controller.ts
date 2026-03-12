import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('assets')
export class CatalogController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getAll() {
    return this.prisma.asset.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.prisma.asset.findUnique({ where: { id } });
  }

  @Post()
  create(@Body() dto: CreateAssetDto) {
    return this.prisma.asset.create({
      data: {
        ...dto,
        ownerId: 'placeholder-user-uuid'
      }
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prisma.asset.delete({ where: { id } });
  }
}
