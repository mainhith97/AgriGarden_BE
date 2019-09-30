const Model = require('./Model');
const UserModel = require('./UserModel');
class ProductsModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'products';
    }
    static get relationMappings (){
        return{
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: UserModel,
                join: {
                  from: 'products.provider_id',
                  to: 'user.id'
                }
              }
        }
      }
}

module.exports = ProductsModel;