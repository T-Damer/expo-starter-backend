import { log } from 'console'
import { Resolver, Mutation, Arg } from 'type-graphql'
import {
  Post,
  PostWhereUniqueInput,
  PostCreateInput,
} from '@generated/type-graphql'
import prismaClient from '@/helpers/prismaClient'
import all from '@generated/type-graphql/resolvers/crud/Post/PostCrudResolver'

@Resolver()
export default class PostResolver {
  @Mutation(() => Post)
  addPost() { // postData: Without<PostUncheckedCreateInput, PostCreateInput> // @Arg('postData')
    // console.info('Adding post', { postData })
    // return prismaClient.post.create({ data: postData })
  }
}
