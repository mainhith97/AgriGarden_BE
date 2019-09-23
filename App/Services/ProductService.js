const UserModel = require('../Models/UserModel');
const ProductModel = require('../Models/ProductsModel');


class ProductService {
    constructor(){
        this.userModel = UserModel;
        this.productModel = ProductModel;
    }

    async getListProduct1(req, res, next){
        try {
            const getListProduct = await this.productModel.query().where('type', 'Cây ăn củ');
            // console.log(getListProduct.name);
            return {
                success: true,
                data: getListProduct
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                data: null
            }
        }
    }
}

module.exports = new ProductService();