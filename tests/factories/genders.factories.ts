import { prisma } from '../../src/config/database'

export async function createGender() {
  return await prisma.genders.create({
    data: {
      name: 'ação'
    }
  })
}