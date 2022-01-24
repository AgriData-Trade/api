import { Module } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { SensorsController } from './sensors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SensorsController],
  providers: [SensorsService],
  imports: [PrismaModule]
})
export class SensorsModule { }
