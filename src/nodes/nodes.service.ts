import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    Node,
    Prisma,
} from '@prisma/client';

@Injectable()
export class NodesService {
    constructor(private prisma: PrismaService) { }

    async node(nodeWhereUniqueInput: Prisma.NodeWhereUniqueInput): Promise<Node | null> {
        return this.prisma.node.findUnique({
            where: nodeWhereUniqueInput,
        });
    }

    async createNode(data: Prisma.NodeCreateInput): Promise<Node> {
        return this.prisma.node.create({
            data,
        });
    }

    async updatePost(params: {
        where: Prisma.NodeWhereUniqueInput;
        data: Prisma.NodeUpdateInput;
    }): Promise<Node> {
        const { data, where } = params;
        return this.prisma.node.update({
            data,
            where,
        });
    }

    async deleteNode(where: Prisma.NodeWhereUniqueInput): Promise<Node> {
        return this.prisma.node.delete({
            where,
        });
    }
}