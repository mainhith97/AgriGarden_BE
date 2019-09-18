const { body } = require('express-validator');

module.exports = [
    body('username')
    .exists()
    .withMessage('username_is_required')
    .not()
    .isEmpty()
    .withMessage('username_is_required'),

    body('email')
    .exists()
    .withMessage('email_is_required')
    .not()
    .isEmpty()
    .withMessage('email_is_required'),

    body('password')
    .exists()
    .withMessage('password_is_required')
    .isLength({
        min: 3
    })
    .withMessage('password_min_length_is_3')
];