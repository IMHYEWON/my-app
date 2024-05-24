import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Project = {
    period: any;
    description: any;
    id: number;
    project_id: number;
    project_name: string;
    title: string;
    period_start: string;
    period_end: string;
    descriptions: Array<Description>;
};

type Description = {
    id: number;
    project_id: number;
    description: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req.method:', req);
    if (req.method === 'GET') {
        try {
            const projects = await prisma.project.findMany({
                include: {
                    descriptions: true,
                },
                orderBy: {
                    id: 'asc',
                },
            });
            res.status(200).json(projects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export type { Project, Description };