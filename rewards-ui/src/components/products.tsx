'use client';

import { Button } from '@components';
import { Product, User } from '@lib/types';
import { useState, useTransition } from 'react';
import { redeemProduct } from '@actions';
import { toast } from 'sonner';

type ProductsProps = {
  initialUser: User;
  initialProducts: Product[];
};

export function UserProducts({ initialUser, initialProducts }: ProductsProps) {
  const [user, setUser] = useState(initialUser);
  const [products, setProducts] = useState(initialProducts);
  const [isPending, startTransition] = useTransition();

  const handleRedeem = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const prevUser = { ...user };
    const prevProducts = [...products];

    // Optimistic UI
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, stock: p.stock - 1 } : p)));
    setUser((prev) => ({ ...prev, points: prev.points - product.price }));

    startTransition(async () => {
      const result = await redeemProduct(user.id, productId);
      if (!result.success) {
        // Rollback UI
        setUser(prevUser);
        setProducts(prevProducts);
        toast.error('Redemption failed', {
          description: result.errors.join(', '),
        });
      } else {
        toast.success('Product purchased successfully');
      }
    });
  };

  return (
    <div className="space-y-4">
      {products.map((product: Product) => {
        const outOfStock = product.stock < 1;
        return (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center gap-4 sm:gap-8"
          >
            <div
              className={`flex flex-1 gap-8 w-full justify-between ${outOfStock ? 'text-gray-300' : ''}`}
            >
              <div>
                <div>{product.name}:</div>
                <div>{outOfStock ? 'Out of Stock' : 'In Stock'}</div>
              </div>
              <div className="flex flex-col justify-end text-right">
                <div>{product.price} points</div>
                <div>Stock: {product.stock}</div>
              </div>
            </div>
            <div className="mb-5 sm:mb-0">
              <Button disabled={outOfStock || isPending} onClick={() => handleRedeem(product.id)}>
                {isPending ? 'Loading' : 'Redeem'}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
