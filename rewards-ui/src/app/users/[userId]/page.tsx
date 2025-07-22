import { Suspense } from 'react';
import { UserProducts, Skeleton } from '@components';
import { API_URL } from '@lib/constants';
import { Product, User } from '@lib/types';

type UserPageProps = {
  params: Promise<{ userId: string }>;
};

export default async function UserPage({ params }: UserPageProps) {
  const { userId } = await params;
  const [user, products]: [User, Product[]] = await Promise.all([getUser(userId), getProducts()]);

  return (
    <div className="flex-1 flex flex-col gap-[32px] min-w-[400px] justify-center items-center sm:items-start">
      <h3 className="font-bold mb-0">Hi {user.first_name}</h3>
      <h5 className="font-bold mb-0">Redeem your points: {user.points}</h5>
      <Suspense fallback={<Skeleton count={10} />}>
        <UserProducts initialUser={user} initialProducts={products} />
      </Suspense>
    </div>
  );
}

async function getUser(userId: string) {
  const res = await fetch(`${API_URL}/users/${userId}`);
  return res.json();
}

async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}
