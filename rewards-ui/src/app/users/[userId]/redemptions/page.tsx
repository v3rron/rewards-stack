import { Suspense } from 'react';
import { Skeleton, UserRedemptions } from '@components';
import { Redemption, User } from '@lib/types';
import { getRedemptions, getUser } from '@lib/api';
import Link from 'next/link';

type RedemptionsPageProps = {
  params: Promise<{ userId: string }>;
};

export default async function RedemptionsPage({ params }: RedemptionsPageProps) {
  const { userId } = await params;
  const response1 = await getUser(userId);
  const response2 = await getRedemptions();

  if (!response1.success) {
    return 'User not found';
  } else if (!response2.success) {
    return 'Redemptions not found';
  }

  const user: User = response1.data;
  const redemptions: Redemption[] = response2.data;

  return (
    <div className="flex-1 flex flex-col gap-[32px] min-w-[400px] justify-center items-center sm:items-start">
      <h3 className="font-bold mb-0">Hi {user.first_name}</h3>
      <h5 className="font-bold mb-0">Redeem your points: {user.points}</h5>
      <Link href={`/users/${userId}`} className="underline">
        Back to products
      </Link>
      <Suspense fallback={<Skeleton count={10} />}>
        <UserRedemptions user={user} redemptions={redemptions} />
      </Suspense>
    </div>
  );
}
