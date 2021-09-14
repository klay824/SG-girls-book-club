const router = require('express').Router();
const userController = require('../../controllers/userController');

// matches with '/api/user'
router.route('/')
    .get(userController.list)
    .post(userController.create)

// matches with '/api/user/:id'
router.route('/:id')
    .get(userController.read)
    .put(userController.update)
    .delete(userController.delete)

// router.param('userId', userController.userByID)

module.exports = router;