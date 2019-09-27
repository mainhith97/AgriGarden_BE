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

    // async getProductImage(req, res, next){
    //     try {
    //         const getProductImage = await this.productModel.query().where('type', 'Cây ăn củ');
    //         // console.log(getListProduct.name);
    //         return {
    //             success: true,
    //             data: getProductImage
    //         };
            
    //     } catch (error) {
    //         console.log(error)
    //         return {
    //             message: 'fail',
    //             data: null
    //         }
    //     }
    // }

    async getProductbyId(id){
        console.log(id);
        try {
            const getProductbyId = await this.productModel.query().findById(id);

            console.log(getProductbyId.name);
            // console.log(getProductbyId.company_name);
            return {
                success: true,
                result: getProductbyId
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

module.exports = new ProductService();