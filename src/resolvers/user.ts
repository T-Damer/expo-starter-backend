import { log } from 'console'
import { Resolver, Mutation, Arg } from 'type-graphql'
import { User, Role, UserWhereUniqueInput } from '@generated/type-graphql'
import prismaClient from '@/helpers/prismaClient'

@Resolver()
export default class UserResolver {
  @Mutation(() => User)
  changeUserRole() // @Arg('where') where: UserWhereUniqueInput,
  // @Arg('role') role: Role
  {
    // console.info('Changing user role', { where, role })
    // const updatedWhere = { id: where.id, email: where.email }
    // return prismaClient.user.update({ where: updatedWhere, data: { role } })
  }
}
