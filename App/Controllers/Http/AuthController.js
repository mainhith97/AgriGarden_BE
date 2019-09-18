const AuthService = require('../../Services/AuthService');

const bcrypt = require('bcrypt');

const jwt = require('json-web-token');

class AuthController {
    constructor(){
        this.authService = AuthService;
    }

    //register controller
    async register({ req, res, next }){
        const {body} = req;
        // console.log(body);
        const result = await this.authService.register(body);

        // console.log(result);
        return res.json(result);
    }
    // login controller logic
    async login({ req, res, next }){
        const {body} = req;
        // console.log(body);
        //goi service
        const result = await this.authService.login(body);
        return res.json(result);
    }

    async getUserInfo({ req, res, next}){
        const result = await this.userModel.query().where('token', token).first();
        console.log(result);
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

    //get profile
    async getProfile({req, res, next}){
        //step1 get token
        const { headers } = req;
        const token = headers.authorization;
        // console.log(token);

        //step2 lay ID cua User dang login
        const get_ID_User = await this.tokenModel.query().where('token', token).first();
        // console.log(get_ID_User.userID);
        //step3 get profile of user
        const getProfile = await this.userModel.query().where('id', get_ID_User.userID).first();
        // console.log(getProfile.username);
        //step4 response
        res.json({
            message: 'get_Profile_success',
            data: getProfile
        });
    }

    //update user
    async updateProfile({req, res, next}){
        //step1 get request
        const { headers } = req;
        const { body } = req;
        const token = headers.authorization;
        if(!body.username){
            res.json({
                message: 'username_is_require'
            })
        }
        //step2 lay ID cua User dang login
        const get_ID_User = await this.tokenModel.query().where('token', token).first();
        
        //step3 update profile cua user
        const updateUsername = await this.userModel.query().findById(get_ID_User.userID)
        .patch({name: body.username});

        //step4 get profile user
        const getProfile = await this.userModel.query().where('id', get_ID_User.userID).first();
        
        //step4 response
        res.json({
            message: 'update_Profile_success',
            data: getProfile
        });
    }

}

module.exports = new AuthController();