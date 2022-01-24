import { Controller, Param, Get } from '@nestjs/common';
import { NodesService } from './node.service';
import { Node as NodeModel } from '@prisma/client'
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('nodes')
@Controller('nodes')
export class NodesController {
    constructor(private readonly nodeService: NodesService) { }

    @ApiOperation({ summary: 'Get node by id', description: 'Get node by id' })
    @Get(':id')
    async getNodebyId(@Param('id') id: string): Promise<NodeModel> {
        return this.nodeService.node({ id: id });
    }

    @ApiOperation({ summary: 'Get all nodes', description: 'Get all nodes' })
    @Get()
    async getNodes(): Promise<NodeModel[]> {
        return this.nodeService.nodes({});
    }
}
