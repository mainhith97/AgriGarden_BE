const Model = require('./Model');

class ProductsTypeModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'products_type';
    }
}

module.exports = ProductsTypeModel;