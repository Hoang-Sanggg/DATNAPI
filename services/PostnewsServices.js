const postModel = require('../models/PostnewsModels');
const VipModel = require('../models/VipModel')

const getProduct = async () => {
    try {
        const product = await postModel.find().populate(['userid', 'brandid', 'idCategory']);
        return product
    } catch (error) {
        console.log("get all produc error: ", error);
        return false;
    }

}

const getPostsHidden = async () => {
    try {
        const posts = await postModel.find({ activable: false }).populate(['userid', 'brandid', 'idCategory']);
        return posts
    } catch (error) {
        console.log("get all produc error: ", error);
        return false;
    }

}
const getPostsPresently = async () => {
    try {
        const posts = await postModel.find({ activable: true }).populate(['userid', 'brandid', 'idCategory']);
        return posts
    } catch (error) {
        console.log("get all produc error: ", error);
        return false;
    }

}

// get postnewsbyid
const getPostByid = async (id) => {
    try {
        const postid = await postModel.findById(id).populate(['userid', 'brandid', 'idCategory']);
        return postid;
    } catch (error) {
        return false;
    }
};

// get postnewsbyidUser
const getPostByidUser = async (userid) => {
    try {
        const postnewsByidUser = await postModel.find({ userid });
        const postnewsByidUserHidden = await postModel.find({ userid, activable: false });
        const postnewsByidUserPresently = await postModel.find({ userid, activable: true });
        console.log("check data hidden: ", postnewsByidUserHidden, "check data presently", postnewsByidUserPresently)
        const postById = {
            "posts": postnewsByidUser,
            "postsHidden": postnewsByidUserHidden,
            "postsPresently": postnewsByidUserPresently
        }
        return postById;
    } catch (error) {
        return false;
    }
};

// get postnewsbyid Categoory
const getPostByidCategory = async (idCategory) => {
    try {
        const postnewsByidCategory = await postModel.find({ idCategory, activable: true });
        const vips = await VipModel.find({ end: { $gte: moment() } }).populate(['vipTypeId', 'postsId']);
        vips.sort((a, b) => b.vipTypeId.price - a.vipTypeId.price);
        const dataPostsVip = vips.map(vip => vip.postsId);
        const uniquePostNews = postnewsByidCategory.filter(item => !dataPostsVip.includes(item))
        const posts = dataPostsVip.concat(uniquePostNews);
        return posts;
    } catch (error) {
        return false;
    }
};
//add
const addProduct = async (productData) => {
    try {
        const newProduct = new postModel(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        return false;
    }
};
// edit
const updateProduct = async (id, title, status, detail, location, price, created_AT, files, role, activable, properties) => {
    try {
        const updatedProduct = await postModel.findByIdAndUpdate(
            id,
            { title, status, detail, location, price, created_AT, files, role, activable, properties }, { new: true }
        );
        return updatedProduct;
    } catch (error) {
        return false;
    }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await postModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        return false;
    }
};

// tiềm kiếm theo title
const searchProductByTitle = async (title) => {
    try {
        const products = await postModel.find({ title: { $regex: new RegExp(title, 'i') } });
        return products;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const postNews = async (title, status, detail, location, price, created_AT, role, activable, properties, userid, brandid, filePaths) => {
    try {
        const newProduct = new postModel({
            title,
            status,
            detail,
            location,
            price,
            created_AT,
            files: filePaths, // Save the file paths here
            role,
            activable,
            properties,
            userid,
            brandid
        });
        const savedProduct = await newProduct.save();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const uploadImagesbyID = async (id, filePaths) => {
    try {
        const existingProduct = await postModel.findById(id);
        const updatedFiles = existingProduct.files.concat(filePaths);
        const updatedProduct = await postModel.findByIdAndUpdate(
            id,
            { files: updatedFiles },
            { new: true }
        );
        return updatedProduct;
    } catch (error) {
        return false;
    }
}

const isActivable = async (idPosts) => {
    try {

        const posts = await postModel.findById(idPosts);
        const newActivable = !posts.activable;
        const updatePosts = await postModel.findByIdAndUpdate(
            idPosts,
            { activable: newActivable },
            { new: true }
        );
        return updatePosts
    } catch (error) {
        return false;
    }
}



module.exports = {
    getProduct, addProduct, updateProduct, deleteProduct, searchProductByTitle, postNews, uploadImagesbyID, getPostByidUser, getPostByidCategory,
    isActivable, getPostsHidden, getPostsPresently, getPostByid
}