const Model = require('./Model');

class ProductsModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'products';
    }
}

module.exports = ProductsModel;