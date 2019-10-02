const Model = require('./Model');

class TypeModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'type';
    }
}

module.exports = TypeModel;