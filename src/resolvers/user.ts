import { log } from 'console'
import { Resolver, Mutation, Arg } from 'type-graphql'
import { User, Role, UserWhereUniqueInput } from '@generated/type-graphql'
import prismaClient from '@/helpers/prismaClient'
import { sign } from 'jsonwebtoken'

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  signUpUser() 
  @Arg('where') where: UserWhereUniqueInput,
  @Arg('role') role: Role
  {
    console.info('Changing user role', { where, role })
    const updatedWhere = { id: where.id, email: where.email }
    const token = sign({ userId: user.id }, APP_SECRET)
    const user = await context.prisma.user.create({
      data: { ...args, password }
    })
    // return prismaClient.user.update({ where: updatedWhere, data: { role } })
    return {user, token}
  }
}
