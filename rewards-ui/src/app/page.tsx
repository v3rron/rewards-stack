import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton } from '@components';
import { API_URL } from '@lib/constants';
import { User } from '@lib/types';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-[32px] justify-center items-center sm:items-start">
      <em>Note: Since this is a demo project, there is no authentication.</em>
      <h3 className="font-bold mb-0">Pick your character:</h3>
      <Suspense fallback={<Skeleton count={3} />}>
        <Users />
      </Suspense>
    </div>
  );
}

async function Users() {
  const users: User[] = await getUsers();

  return (
    <ul className="space-y-4">
      {users.map((user: User) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`} className="underline">
            {user.first_name} {user.last_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
}
