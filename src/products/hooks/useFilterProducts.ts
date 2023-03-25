import {useState} from 'react';
import {createAdapterProduct} from '../adapters/product.adapter';
import {Product, ProductApi} from '../models/products.models';

export const useFilterProducts = (products: ProductApi[]) => {
  const productsPositive: Product[] = [];
  const productsNegative: Product[] = [];
  const [listFilter, setListFilter] = useState<'all' | 'positive' | 'negative'>(
    'all',
  );
  const totalAmount = products?.reduce((acc, el) => {
    el.is_redemption === false
      ? productsPositive.push(createAdapterProduct(el))
      : productsNegative.push(createAdapterProduct(el));
    return el.is_redemption ? acc + el.points : acc - el.points;
  }, 0);
  const adapterProduct: Product[] = products
    ? products?.map(item => {
        const {id, points, product, image, is_redemption, createdAt} = item;
        return {
          id,
          points,
          image,
          is_redemption,
          createdAt: createdAt.toString(),
          product,
        };
      })
    : [
        {
          id: '1',
          points: 1200,
          image: 's',
          is_redemption: false,
          createdAt: '2022-12-08T18:54:56.243Z',
          product: 'test product',
        },
      ];
  const FIlTERPRODUCTS = {
    all: adapterProduct,
    positive: productsPositive,
    negative: productsNegative,
  };
  return {
    ListProducts: FIlTERPRODUCTS[listFilter as keyof typeof FIlTERPRODUCTS],
    totalAmount,
    listFilter,
    setListFilter,
  };
};
