import {Product, ProductApi} from '../models/products.models';

export const createAdapterProduct = (item: ProductApi): Product => {
  const {id, points, image, createdAt, product, is_redemption} = item;
  return {
    id,
    points,
    image,
    createdAt: createdAt.toString(),
    product,
    is_redemption,
  };
};
