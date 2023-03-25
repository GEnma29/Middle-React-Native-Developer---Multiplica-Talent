import {createAdapterProduct} from '@src/products/adapters/product.adapter';

const example = {
  createdAt: '2023-03-11T15:03:45.467Z',
  product: 'Gorgeous Cotton Sausages',
  points: 31023,
  image: 'https://loremflickr.com/640/480/nightlife',
  is_redemption: true,
  id: '23',
  query: '{\n  \n}',
  variables: {},
  operationName: null,
};

const expectElement = {
  createdAt: '2023-03-11T15:03:45.467Z',
  product: 'Gorgeous Cotton Sausages',
  points: 31023,
  image: 'https://loremflickr.com/640/480/nightlife',
  is_redemption: true,
  id: '23',
};

describe('adapter product', () => {
  it('get params  child', () => {
    const product = createAdapterProduct(example);
    expect(product).toEqual(expectElement);
  });
});
