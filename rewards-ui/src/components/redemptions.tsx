'use client';

import { Redemption, User } from '@lib/types';

type ProductsProps = {
  user: User;
  redemptions: Redemption[];
};

export function UserRedemptions({ user, redemptions }: ProductsProps) {
  return (
    <div className="space-y-4">
      {redemptions.map((redemption: Redemption) => {
        return (
          <div
            key={redemption.id}
            className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center gap-4 sm:gap-8"
          >
            <div className="flex flex-1 gap-8 w-full justify-between">
              <div>
                <div>{redemption.product.name}:</div>
                <div>{redemption.created_at.toString()}</div>
              </div>
              <div className="flex flex-col justify-end text-right">
                <div>{redemption.product.price} points</div>
                {/* <div>Stock: {product.stock}</div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
