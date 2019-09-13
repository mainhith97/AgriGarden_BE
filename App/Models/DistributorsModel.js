const Model = require('./Model');

class DistributorsModel extends Model{
    constructor(){
        super();
    }

    static get tableName(){
        return 'distributors';
    }
}

module.exports = DistributorsModel;