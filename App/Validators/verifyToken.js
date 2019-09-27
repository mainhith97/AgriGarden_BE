// const jwt = require('json-web-token');

// var decodedToken ='';
// const verifyToken = () => {

//     verifyToken(req, res, next){
//         let token = req.query.token;

//         jwt.verify(token, Env.APP_KEY, (err, tokendata) => {
//             // if(err){
//             //     return res.status(400).json({message:' Unauthorized request '});
//             // }
//             if(tokendata){
//                 decodedToken = tokendata;
//                 next();
//             }
//         })
//     }
// }
// module.exports = {
//     verifyToken
// }