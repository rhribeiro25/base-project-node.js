import { MongoHelper } from '../helpers/mongo-helper'
import { LogErrorRepository } from '@/data/protocols/db/log/log-error-repository'
import CollectionNames from '@/main/config/collection-names'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection(CollectionNames.error)
    await errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
