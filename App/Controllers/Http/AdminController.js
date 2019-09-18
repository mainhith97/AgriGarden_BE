const AdminService = require('../../Services/AdminService');

class AdminController {
    constructor(){
        this.adminService = AdminService;
    }
    // login controller logic
    async login({ req, res, next }){
        const {body} = req;
        // console.log(body);
        //goi service
        const result = await this.adminService.login(body);
        return res.json(result);
    }

    //logout
    async logout({ req, res, next }){
        const { headers } = req;
        const token = headers.authorization;
        console.log(token);
        
        

        const check_token = await this.tokenModel.query().where('token', token).first();
        if(!check_token){
            res.json({
                message: 'token is not found'
            })
        }

        await this.tokenModel.query().patch({status: 0, token: ''}).where('token', token).first();

        res.json({
            message: 'logout_success',
            data: token.value
        });

    }

}

module.exports = new AdminController();