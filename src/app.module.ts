import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { NodeModule } from './node/node.module';
import { PrismaModule } from './prisma/prisma.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [PrismaModule, NodeModule, SensorsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
