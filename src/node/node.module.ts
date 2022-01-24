import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { NodesController } from './node.controller';
import { NodesService } from './node.service';

@Module({
  controllers: [NodesController],
  providers: [NodesService],
  imports: [PrismaModule]
})
export class NodeModule { }
