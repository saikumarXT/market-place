import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const user = new Schema({
    userName: String,
    password: { type: String, unique: true },
});
const productCategories = ['electronic', 'vehicles', 'fashion', 'realEstate'];
const product = new Schema({
    sellerId: ObjectId,
    title: String,
    img: String,
    description: String,
    price: Number,
    category: { type: String, enum: productCategories }
});
const userModel = mongoose.model('users', user);
const productModel = mongoose.model('products', product);
export { userModel, productModel };
//# sourceMappingURL=db.js.map