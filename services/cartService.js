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
const updateCart = async (cartId, updatedCartData) => {
    try {
        const updatedCart = await CartModel.findOneAndUpdate(
            { _id: cartId },
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
const deleteCart = async (cartId) => {
    try {
        const deletedCart = await CartModel.findOneAndDelete({ _id: cartId });

        return deletedCart;
    } catch (error) {
        console.error('Error in deleteCart:', error);
        throw error;
    }
};

module.exports = {
    getAllCarts,addCart,updateCart,deleteCart
};
