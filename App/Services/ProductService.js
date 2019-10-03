const UserModel = require('../Models/UserModel');
const ProductModel = require('../Models/ProductsModel');

class ProductService {
    constructor() {
        this.userModel = UserModel;
        this.productModel = ProductModel;
    }
// lấy danh sách sản phẩm cây ăn củ
    async getListProduct1(req, res, next) {
        try {
            const getListProduct1 = await this.productModel.query().where('type', '1');
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
// lấy danh sách sản phẩm cây ăn lá
    async getListProduct2(req, res, next) {
        try {
            const getListProduct2 = await this.productModel.query().where('type', '2');
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
    // lấy danh sách sản phẩm cây ăn thân
    async getListProduct3(req, res, next) {
        try {
            const getListProduct3 = await this.productModel.query().where('type', '3');
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
    // lấy danh sách sản phẩm hoa quả
    async getListProduct4(req, res, next) {
        try {
            const getListProduct4 = await this.productModel.query().where('type', '4');
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
    // lấy danh sách sản phẩm hạt giống rau
    async getListProduct5(req, res, next) {
        try {
            const getListProduct5 = await this.productModel.query().where('type', '5');
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
    // lấy danh sách sản phẩm hạt giống hoa
    async getListProduct6(req, res, next) {
        try {
            const getListProduct6 = await this.productModel.query().where('type', '6');
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
    // lấy danh sách sản phẩm trà
    async getListProduct7(req, res, next) {
        try {
            const getListProduct7 = await this.productModel.query().where('type', '7');
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
    // lấy danh sách sản phẩm nấm
    async getListProduct8(req, res, next) {
        try {
            const getListProduct8 = await this.productModel.query().where('type', '8');
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

// lấy chi tiết sản phẩm
    async getProductbyId(id) {
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

    //nhận từ khoá tìm kiếm
    async search(body){
        try {
            const keyword = body.keyword;
            return {
                success: true,
                result: keyword
            };

        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }
// lấy dữ liệu tìm kiếm đc
    async getSearchResult(keyword){
        console.log(keyword);
        try {
            const getResult =  await this.productModel.query().where('name','like', '%'+keyword+'%');
            if(!getResult){
                return {
                    success: true,
                    message: 'product_not_found'
                }
            }
            return {
                success: true,
                result: getResult
            }
        } catch (error) {
            console.log(error)
            return {
                message: 'fail',
                result: null
            }
        }
    }

    //lấy sản phẩm mới nhất
    async getListNewest(req, res, next) {
        try {
            const getListNewest = await this.productModel.query().limit(8).orderBy('created_at','DESC');
            return {
                success: true,
                result: getListNewest
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