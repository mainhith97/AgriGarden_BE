const UserModel = require('../Models/UserModel');
const ProductModel = require('../Models/ProductsModel');
let findQuery = require('objection-find');

class ProductService {
    constructor(){
        this.userModel = UserModel;
        this.productModel = ProductModel;
    }

    async getListProduct1(req, res, next){
        try {
            const getListProduct1 = await this.productModel.query().where('type', 'Cây ăn củ');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct1
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct2(req, res, next){
        try {
            const getListProduct2 = await this.productModel.query().where('type', 'Cây ăn lá');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct2
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct3(req, res, next){
        try {
            const getListProduct3 = await this.productModel.query().where('type', 'Cây rau ăn thân');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct3
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct4(req, res, next){
        try {
            const getListProduct4 = await this.productModel.query().where('type', 'Hoa quả');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct4
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct5(req, res, next){
        try {
            const getListProduct5 = await this.productModel.query().where('type', 'Hạt giống rau sạch');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct5
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct6(req, res, next){
        try {
            const getListProduct6 = await this.productModel.query().where('type', 'Hạt giống hoa');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct6
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct7(req, res, next){
        try {
            const getListProduct7 = await this.productModel.query().where('type', 'Trà các loại');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct7
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
    async getListProduct8(req, res, next){
        try {
            const getListProduct8 = await this.productModel.query().where('type', 'Nấm các loại');
            // console.log(getListProduct.name);
            return {
                success: true,
                result: getListProduct8
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }


    async getProductbyId(id){
        console.log(id);
        try {
            const getProductbyId = await this.productModel.query().eager('user').joinRelation('user').findById(id);

            console.log(getProductbyId.name);
            console.log(getProductbyId.user.company_name);
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

    async search(body){
        try {
            const getSearch = await this.productModel.query().where('name','like', '%'+body.key+'%');
            if(!getSearch){
                return {
                    message: 'product_not_found',
                    result: null
                }
            };
            return {
                success: true,
                result: getSearch,
            };
            
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }

    // async searchResult(name){
    //     try {
    //         getResult.search(body, function(getSearch){
    //             if(!getResult){
    //                 return {
    //                     message: 'product_not_found',
    //                     result: null
    //                 }
    //             };
    //             return {
    //                 success: true,
    //                 result: getResult
    //             };
    //         });
            
    //     } catch (error) {
    //         console.log(error)
    //         return {
    //             message: 'fail',
    //             result: null
    //         }
    //     }
    // }
}

module.exports = new ProductService();