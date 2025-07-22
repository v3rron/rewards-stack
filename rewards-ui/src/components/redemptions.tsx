'use client';

import { Redemption } from '@lib/types';

type RedemptionProps = {
  redemptions: Redemption[];
};

export function UserRedemptions({ redemptions }: RedemptionProps) {
  if (!redemptions.length) {
    return 'No redemptions found';
  }
  return (
    <div className="space-y-4">
      {redemptions.map((redemption: Redemption) => {
        const createdAt = new Date(redemption.created_at);
        return (
          <div
            key={redemption.id}
            className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center gap-4 sm:gap-8"
          >
            <div className="flex flex-1 gap-8 w-full justify-between">
              <div>
                <div>{redemption.product.name}:</div>
                <div>{createdAt.toLocaleString()}</div>
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
