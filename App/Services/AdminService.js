const AdminModel = require('../Models/AdminModel');
const TokenModel = require('../Models/TokenModel');
const UserModel = require('../Models/UserModel');
const ProductModel = require('../Models/ProductsModel');
const TypeModel = require('../Models/TypeModel');

const bcrypt = require('bcrypt');

const jwt = require('json-web-token');

class AdminService {
    constructor(){
        this.adminModel = AdminModel;
        this.tokenModel = TokenModel;
        this.userModel = UserModel;
        this.productModel = ProductModel;
        this.typeModel = TypeModel;
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

    async login(body){
        try {
            if( !body.username || !body.password ){
                return {
                    message: 'username_or_password_is_require',
                    result: null
                }
            }
            console.log(body);
            //get user_need_to_check
            const getAdmin = await this.adminModel.query().where('username', body.username).first();
            if(!getAdmin){
                return {
                    message: 'username_not_existed',
                     result: null
                }
            };
            //comapre password
        
            const check_admin = await this.adminModel.query().where('username', body.username).where('password', body.password).first();
            //var check_password = this.compare_password(body.password, getUser.password);
            //step4
            
            if(!check_admin){
                return {
                    message: 'wrong_password',
                    result: null
                }
            }
    
            //create new token
            let token = jwt.encode(Env.APP_KEY, {
                id: getAdmin.id,
                timestamp: new Date().getTime()
            });
            console.log(token);
            // console.log(token2.value);
            await this.tokenModel.query().patch({token: token.value}).where('userID', getAdmin.id);
    
            return {
                success: true,
                message: 'login_success',
                result: token.value
            };
        } catch (error) {
            return {
                message: 'login_fail',
                result: null
            }
        }
    }

    // lấy danh sách user
    async getListUser(req, res, next) {
        try {
            const getListUser = await this.userModel.query();
            return {
                success: true,
                result: getListUser
            };

        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }

    //lấy danh sách sản phẩm
    async getListProduct() {
        try {
            const getListProduct = await this.productModel.query().eager('[product_type,user]');
            return {
                success: true,
                result: getListProduct
            };

        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
}

module.exports = new AdminService();