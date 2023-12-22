const CartModel = require('../models/cartModel');

// lấy tất cả giỏ hàng
const getAllCarts = async () => {
    try {
        const carts = await CartModel.find();
        return carts;
    } catch (error) {
        console.error('Error in getAllCarts:', error);
        throw error;
    }
};

// thêm giỏ hàng
const addCart = async (cartData) => {
    try {
        const newCart = await CartModel.create(cartData);
        return newCart;
    } catch (error) {
        console.error('Error in addCart:', error);
        throw error;
    }
};

// sửa giỏ hàng
const updateCart = async (id, updatedCartData) => {
    try {
        const updatedCart = await CartModel.findOneAndUpdate(
            { _id: id },
            { $set: updatedCartData },
            { new: true }
        );
        return updatedCart;
    } catch (error) {
        console.error('Error in updateCart:', error);
        throw error;
    }
};

//xóa giỏ hàng
const deleteCart = async (id) => {
    try {
        const deletedCart = await CartModel.findOneAndDelete({ _id: id });
        return deletedCart;
    } catch (error) {
        console.error('Error in deleteCart:', error);
        throw error;
    }
};

module.exports = {
    getAllCarts,addCart,updateCart,deleteCart
};
