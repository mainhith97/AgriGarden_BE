const ProductService = require('../../Services/ProductService');
const AuthMiddeware = require('../../Middlewares/AuthMiddleware');

class ProductController {
    constructor(){
        this.productService = ProductService;
        this.authMiddeware = AuthMiddeware;
    }

    async getListProduct1({req, res, next}){
        const result = await this.productService.getListProduct1();
        return res.json(result);
    }
    async getListProduct2({req, res, next}){
        const result = await this.productService.getListProduct2();
        return res.json(result);
    }
    async getListProduct3({req, res, next}){
        const result = await this.productService.getListProduct3();
        return res.json(result);
    }
    async getListProduct4({req, res, next}){
        const result = await this.productService.getListProduct4();
        return res.json(result);
    }
    async getListProduct5({req, res, next}){
        const result = await this.productService.getListProduct5();
        return res.json(result);
    }
    async getListProduct6({req, res, next}){
        const result = await this.productService.getListProduct6();
        return res.json(result);
    }
    async getListProduct7({req, res, next}){
        const result = await this.productService.getListProduct7();
        return res.json(result);
    }
    async getListProduct8({req, res, next}){
        const result = await this.productService.getListProduct8();
        return res.json(result);
    }
    
    async getProductbyId({req, res, next}){
        const result = await this.productService.getProductbyId(req.params.id);
        return res.json(result);
    }
    async search({req, res, next}){
        const {body} = req;
        const result = await this.productService.search(body);
        return res.json(result);
    }
    async getSearchResult({req, res, next}){
        const result = await this.productService.getSearchResult(req.query.keyword);
        return res.json(result);
    }
    async getListNewest({req, res, next}){
        const result = await this.productService.getListNewest();
        return res.json(result);
    }
}

module.exports = new ProductController();