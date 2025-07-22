import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton, UserRedemptions } from '@components';
import { Redemption } from '@lib/types';
import { getRedemptions } from '@lib/api';

type RedemptionsPageProps = {
  params: Promise<{ userId: string }>;
};

export default async function RedemptionsPage({ params }: RedemptionsPageProps) {
  const { userId } = await params;
  const response = await getRedemptions(userId);

  if (!response.success) {
    return 'Data fetching failed';
  }

  const redemptions: Redemption[] = response.data || [];

  return (
    <div className="flex-1 flex flex-col gap-[32px] min-w-[400px] justify-center items-center sm:items-start">
      <Link href={`/users/${userId}`} className="underline">
        Back to products
      </Link>
      <Suspense fallback={<Skeleton count={10} />}>
        <UserRedemptions redemptions={redemptions} />
      </Suspense>
    </div>
  );
}
