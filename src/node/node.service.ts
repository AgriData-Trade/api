import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Node, Prisma } from '@prisma/client';

@Injectable()
export class NodesService {
    constructor(private prisma: PrismaService) { }

    async node(nodeWhereUniqueInput: Prisma.NodeWhereUniqueInput): Promise<Node | null> {
        return this.prisma.node.findUnique({
            where: nodeWhereUniqueInput,
        });
    }

    async nodes(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.NodeWhereUniqueInput;
        where?: Prisma.NodeWhereInput;
        orderBy?: Prisma.NodeOrderByWithRelationInput;
    }): Promise<Node[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.node.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
}
