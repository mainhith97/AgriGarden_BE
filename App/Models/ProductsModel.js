const Model = require('./Model');
const UserModel = require('./UserModel');
const TypeModel = require('./TypeModel');
class ProductsModel extends Model {
  constructor() {
    super();
  }

  static get tableName() {
    return 'products';
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'products.provider_id',
          to: 'user.id'
        }
      },
      product_type: {
        relation: Model.BelongsToOneRelation,
        modelClass: TypeModel,
        join: {
          from: 'products.type',
          to: 'type.id'
        }
      }
    }
  }
}

module.exports = ProductsModel;