export interface ProductApi {
  amount?: number;
  createdAt: Date | string;
  from_account_id?: number;
  id: string;
  image: string;
  is_redemption: boolean;
  operationName?: null | string;
  points: number;
  product: string;
  query?: string;
  reason?: string;
  to_account_id?: number;
  variables?: Variables | null;
  verification_code?: string;
}

export interface Product {
  createdAt: string;
  id: string;
  image: string;
  points: number;
  is_redemption: boolean;
  product: string;
}

export interface Variables {}
