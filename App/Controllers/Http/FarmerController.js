const FarmerService = require('../../Services/FarmerService');

const bcrypt = require('bcrypt');

const jwt = require('json-web-token');

class FarmerController {
    constructor(){
        this.farmerService = FarmerService;
    }

    //register controller
    async register({ req, res, next }){
        const {body} = req;
        // console.log(body);
        const result = await this.farmerService.register(body);

        // console.log(result);
        return res.json(result);
    }
    

}

module.exports = new FarmerController();