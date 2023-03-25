import useSWR from 'swr';
import {useFilterProducts} from '../hooks/useFilterProducts';
import {ProductApi} from '../models/products.models';

export const useGetProducts = () => {
  const {data: products, isLoading} = useSWR<ProductApi[]>('/products');
  const {ListProducts, listFilter, setListFilter, totalAmount} =
    useFilterProducts(products || []);
  return {
    ListProducts,
    isLoading,
    totalAmount,
    listFilter,
    setListFilter,
  };
};
