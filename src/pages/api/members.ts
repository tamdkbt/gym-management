import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const members = await prisma.member.findMany({
        include: {
          subscriptions: true,
          payments: true
        }
      })
      res.status(200).json(members)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch members' })
    }
  } else if (req.method === 'POST') {
    try {
      const member = await prisma.member.create({
        data: req.body
      })
      res.status(201).json(member)
    } catch (error) {
      res.status(500).json({ error: 'Failed to create member' })
    }
  }
}
