const UserModel = require('../Models/UserModel');
const TokenModel = require('../Models/TokenModel');

const bcrypt = require('bcrypt');

const jwt = require('json-web-token');

class AuthService {
    constructor(){
        this.userModel = UserModel;
        this.tokenModel = TokenModel;
    }
    //hash password
    hash_password(password){
        const saltRounds = parseInt(Env.SALT);

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    };

    //compare password
    compare_password(password, hash){
        return bcrypt.compareSync(password, hash);
    };
    async register(body){
        try {
            //check data
        if( !body.username || !body.password ){
            return res.json({
                message: 'username_or_password_is_required',
                data: null
            })
        }
        //step3
        const user = await this.userModel.query()
        .where('username', body.username)
        .first();

        //step4
        if(user){
            return res.json({
                message: 'user_is_exist',
                data: null
            });
        }

        //step5
        //do later
        const password_hash = this.hash_password(body.password);

        const dataInsert = {
            username: body.username,
            password: password_hash,
            name: body.name,
            company_name: body.company_name,
            email: body.email,
            address: body.address,
            telephone: body.telephone,
            description: body.name,
            role: "distributor",
            created_at: new Date(),
            updated_at: new Date()
        };
        console.log( 'thoi gian' +dataInsert.updated_at);

        const userInserted = await this.userModel.query().insert(dataInsert);
        if(userInserted){
            console.log('da add vao db');
        }else{
            console.log('ko add dc');
        }
        
        
        let token = jwt.encode(Env.APP_KEY, {
            ID: userInserted.ID,
            timestamp: new Date().getTime()
        });

        const dataTokenInsert = {
            userID: userInserted.id,
            token: token.value,
            status: 1
        };

        await this.tokenModel.query().insert(dataTokenInsert);

        return {
            success: true,
            message: 'register_success',
            data: token.value
        };
        } catch (error) {
            console.log(error)
            return {
                message: 'register_fail',
                data: null
            }
        }
    }

    async login(body){
        try {
            if( !body.username || !body.password ){
                return {
                    message: 'username_or_password_is_require',
                    data: null
                }
            }
            //get user_need_to_check
            const getUser = await this.userModel.query().where('username', body.username).first();
            if(!getUser){
                return {
                    message: 'username_not_existed',
                     data: null
                }
            };
            //comapre password
        
            //const check_user = await this.userModel.query().where('username', body.username).where('password', body.password).first();
            var check_password = this.compare_password(body.password, getUser.password);
            //step4
            
            if(!check_password){
                return {
                    message: 'wrong_password',
                    data: null
                }
            }
    
            //create new token
            let token = jwt.encode(Env.APP_KEY, {
                id: getUser.id,
                timestamp: new Date().getTime()
            });
            
            // console.log(token2.value);
            await this.tokenModel.query().patch({token: token.value}).where('userID', getUser.id);
    
            return {
                success: true,
                message: 'login_success',
                data: token.value,
                role: getUser.role
            };
        } catch (error) {
            console.log(error)
            return {
                message: 'login_fail',
                data: null
            }
        }
    }

    // isLoggedIn() {
    //     return headers.get('Authorization') === 'Bearer' + data;
    // }
}

module.exports = new AuthService();