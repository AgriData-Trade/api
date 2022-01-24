import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { Log } from '@prisma/client';
import { SensorsService } from './sensors.service';

@ApiTags('sensors')
@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) { }

  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  @ApiOperation({ summary: 'Get all logs', description: 'Get all logs' })
  @Get(':id')
  findOne(@Param('id') id: string, @Query('from') from: Date, @Query('to') to?: Date): Promise<Log[]> {
    if (from === undefined) {
      return this.sensorsService.logs({ node_id: id });
    }
    else {
      return this.sensorsService.logs({
        node_id: id, logged_at: {
          gt: from,
          lt: to
        }
      });
    }
  }
}
