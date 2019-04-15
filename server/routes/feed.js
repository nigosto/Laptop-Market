const router = require('express').Router();
const laptopController = require('../controllers/feed')
const isAuth = require('../middleware/is-auth')
const isAdmin = require('../middleware/is-admin')

router.get('/laptop/all' ,laptopController.laptopGetAll)
router.post('/laptop/create',isAdmin, laptopController.laptopCreate)
router.get('/laptop/details/:id', laptopController.laptopGetById)
router.put('/cart/:userId/add/:laptopId',isAuth, laptopController.laptopAddToCart)
router.put('/laptop/buy/:id', isAuth, laptopController.laptopBuy)
router.delete('/order/delete/:id', isAuth, laptopController.orderDelete)
router.put('/order/send/:id', isAdmin, laptopController.orderSend)
router.put('/laptop/edit/:id', isAdmin, laptopController.laptopEdit)
router.put('/cart/:userId/remove/:laptopId', isAuth, laptopController.laptopRemoveFromCart)
router.put('/laptop/remove/:id', isAdmin,laptopController.laptopMakeUnavailable )
router.get('/order/user/:userId', isAuth, laptopController.getUserLaptops)
router.get('/cart/:userId', isAuth, laptopController.getUserCart)
router.get('/order/all', isAdmin, laptopController.getAllOrders)

module.exports = router