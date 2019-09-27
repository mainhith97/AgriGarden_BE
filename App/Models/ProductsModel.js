const Model = require('./Model');

class ProductsModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'products';
    }
    // static relationMappings = {
    //     owner: {
    //       relation: Model.BelongsToOneRelation,
    //       modelClass: UserModel,
    //       join: {
    //         from: 'products.provider_id',
    //         to: 'user.id'
    //       }
    //     }
    //   }
}

module.exports = ProductsModel;