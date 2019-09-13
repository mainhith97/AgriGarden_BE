const Model = require('./Model');

class FarmersModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'farmers';
    }
}

module.exports = FarmersModel;