import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Log, Prisma } from '@prisma/client';

@Injectable()
export class SensorsService {
  constructor(private prisma: PrismaService) { }

  async logs(logWhereInput: Prisma.LogWhereInput): Promise<Log[] | null> {
    return this.prisma.log.findMany({ where: logWhereInput });
  }
}
