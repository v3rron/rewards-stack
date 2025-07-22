export type User = {
  id: string;
  first_name: string;
  last_name: string;
  points: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type Redemption = {
  id: string;
  user: User;
  product: Product;
  created_at: Date;
};
