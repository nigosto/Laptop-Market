const Laptop = require('../models/Laptop');
const User = require('../models/User')
const Order = require('../models/Order')

module.exports = {
    laptopGetAll: async (req, res, next) => {
        try {
            const laptops = await Laptop.find();

            res.status(200).json({
                message: "Laptops fetched successfully!",
                laptops
            })

        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopCreate: async (req,res,next) => {
        try {
            const {brand, model, description, processor, videoCard, RAM, memory, screen, price, image, quantity} = req.body;

            let errors = [];

            let laptops = await Laptop.find({model: model})

            if(laptops.length){
                errors.push('This model already exists!')
            }

            if(quantity < 1 || quantity===undefined){
                errors.push('Please enter valid quantity!')
            }

            if(model === ''){
                errors.push('Please enter model!')
            }

            if(brand === ''){
                errors.push('Please enter brand!')
            }

            if(description === ''){
                errors.push('Please enter description!')
            }

            if(processor === ''){
                errors.push('Please enter processor!')
            }

            if(videoCard === ''){
                errors.push('Please enter video card!')
            }

            if(!RAM){
                errors.push('Please enter RAM!')
            }

            if(memory === undefined) {
                errors.push('Please enter memory!')
            }

            if(screen === undefined){
                errors.push('Please enter screen')
            }

            if(price === undefined) {
                errors.push('Please enter price!')
            }

            if(image === ''){
                errors.push('Please enter image!')
            }

            if(errors.length){
                res.status(400).json({errors})
                return;
            }

            let laptop = await Laptop.create({
                brand, model, description, processor, videoCard, RAM, memory, screen, price, image, quantity
            })

            res.status(200).json({
                message: "Laptop successfully created!",
                laptop: laptop
            })
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopGetById: async (req,res,next) => {
        try {
            const id = req.params.id;
            let laptop = await Laptop.findById(id);

            res.status(200).json({message: "Laptop successfully fetched!", laptop})
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopAddToCart: async (req,res,next) => {
        try {
            const userId = req.params.userId;
            const laptopId = req.params.laptopId;

            const laptop = await Laptop.findById(laptopId);
            if(laptop === null){
                res.status(404).json({error: "Laptop with this id does not exist"})
                return;
            }
            const user = await User.findById(userId);
            
            let exists = false;
            user.cart.forEach(id => {
                if(id.toString() === laptopId){
                    exists = true;
                }
            });
            if(exists){
                res.status(400).json({error: "This laptop is already in your cart!"})
                return;
            }
            user.cart.push(laptopId);
            await user.save();
            res.status(200).json({message: 'Laptop successfully added to cart!', cart: user.cart})
            
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopBuy: async (req,res,next) => {
        try {
            const laptopId = req.params.id;
            const {userId, quantity} = req.body;

            let laptop = await Laptop.findById(laptopId)
            let user = await User.findById(userId)

            let errors = [];

            if(!laptop.isAvailable){
                errors.push('Laptop is unavailable!')
            }

            if(laptop.quantity < quantity){
                errors.push('Please enter valid quantity!')
            }

            if(laptop === null) {
                errors.push('There is no such laptop!')
            }

            if(errors.length){
                res.status(400).json({errors})
                return;
            }

            const index = user.cart.indexOf(laptop._id);
            if(index > -1){
                user.cart.splice(index,1);
            }

            user.laptops.push(laptop._id);

            await user.save();
            laptop.quantity -= quantity;
            if(laptop.quantity === 0){
                laptop.isAvailable = false;
            }

            await Order.create({
                buyer: user._id,
                laptop: laptop._id,
                quantity: quantity,
                price: quantity*laptop.price
            })

            await laptop.save();
            res.status(200).json({message: 'Laptop successfuly bought!'})

        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },

    orderDelete: async (req,res,next) => {
        try {
            const id = req.params.id;

            let order = await Order.findById(id);
            let user = await User.findById(order.buyer)
            let laptop = await Laptop.findById(order.laptop);

            const index = user.laptops.indexOf(laptop._id);
            if(index > -1){
                user.laptops.splice(index,1);
            }
            await user.save()

            laptop.quantity += order.quantity;
            laptop.isAvailable = true;
            await laptop.save();

            await order.remove();

            res.status(200).json({message: 'Order removed successfully!'})

        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    orderSend: async (req,res,next) => {
        try {
            const id = req.params.id;

            let order = await Order.findById(id);
            order.status = "Sent";
            await order.save();

            res.status(200).json({message: 'Order sent successfully!'})

        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopEdit: async (req,res,next) => {
        try {
            const {brand, model, description, processor, videoCard, RAM, memory, screen, price, image, quantity} = req.body;
            const id = req.params.id;

            let laptop = await Laptop.findById(id);

            let errors = [];

            if(quantity < 1 || quantity===undefined){
                errors.push('Please enter valid quantity!')
            }

            if(model === ''){
                errors.push('Please enter model!')
            }

            if(brand === ''){
                errors.push('Please enter brand!')
            }

            if(description === ''){
                errors.push('Please enter description!')
            }

            if(processor === ''){
                errors.push('Please enter processor!')
            }

            if(videoCard === ''){
                errors.push('Please enter video card!')
            }

            if(!RAM){
                errors.push('Please enter RAM!')
            }

            if(memory === undefined) {
                errors.push('Please enter memory!')
            }

            if(screen === undefined){
                errors.push('Please enter screen')
            }

            if(price === undefined) {
                errors.push('Please enter price!')
            }

            if(image === ''){
                errors.push('Please enter image!')
            }

            if(errors.length){
                res.status(400).json({errors})
                return;
            }

            laptop.brand = brand;
            laptop.model = model;
            laptop.description = description;
            laptop.processor = processor;
            laptop.videoCard = videoCard;
            laptop.RAM = RAM;
            laptop.memory = memory;
            laptop.screen = screen;
            laptop.price = price;
            laptop.image = image;
            laptop.quantity = quantity;

            if(quantity > 0){
                laptop.isAvailable = true;
            }

            await laptop.save();
            res.status(200).json({message: 'Laptop successfully updated!'})
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopRemoveFromCart: async (req,res,next) => {
        try {
            const userId = req.params.userId;
            const laptopId = req.params.laptopId;

            let user = await User.findById(userId);
            let laptop = await Laptop.findById(laptopId);

            const index = user.cart.indexOf(laptop._id);
            if(index > -1){
                user.cart.splice(index,1);
            }

            await user.save();
            await laptop.save();

            res.status(200).json({message: 'Laptop successfully removed from cart!'})

        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    laptopMakeUnavailable: async (req,res,next) => {
        try {
            const id = req.params.id

            let laptop = await Laptop.findById(id);
            laptop.isAvailable = false;
            await laptop.save()
            res.status(200).json({message: 'Laptop not selling anymore!'})
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    getUserLaptops: async (req,res,next) => {
        try {
            const userId = req.params.userId;

            let user = await User.findById(userId);
            
            res.status(200).json({message: 'Orders successfully fetched!', orders: user.laptops})
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    },
    getUserCart: async (req,res,next) => {
        try {
            const userId = req.params.userId;

            let user = await User.findById(userId);

            res.status(200).json({message: 'Cart fetched successfully!', orders: user.cart})
            
        } catch (error) {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        }
    }
}