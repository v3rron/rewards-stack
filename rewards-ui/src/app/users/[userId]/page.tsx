import Link from 'next/link';
import { Suspense } from 'react';
import { UserProducts, Skeleton } from '@components';
import { Product, User } from '@lib/types';
import { getProducts, getUser } from '@lib/api';

type UserPageProps = {
  params: Promise<{ userId: string }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;
  const response1 = await getUser(userId);
  const response2 = await getProducts();

  if (!response1.success) {
    return response1.status === 404 ? 'User not found' : 'Server unavailable';
  } else if (!response2.success) {
    return 'Data fetching failed';
  }

  const user: User = response1.data as User;
  const products: Product[] = response2.data as Product[];

  return (
    <div className="flex-1 flex flex-col gap-[32px] min-w-[400px] justify-center items-center sm:items-start">
      <h3 className="font-bold mb-0">Hi {user.first_name}</h3>
      <h5 className="font-bold mb-0">Redeem your points: {user.points}</h5>
      <Link href={`/users/${userId}/redemptions`} className="underline">
        Redemption History
      </Link>
      <Suspense fallback={<Skeleton count={10} />}>
        <UserProducts initialUser={user} initialProducts={products} />
      </Suspense>
    </div>
  );
}
