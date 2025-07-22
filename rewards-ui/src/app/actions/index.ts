'use server';

import { revalidatePath } from 'next/cache';
import { API_URL } from '@lib/constants';

export async function redeemProduct(userId: string, productId: string) {
  const res = await fetch(`${API_URL}/redemptions`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      product_id: productId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await res.json();

  if (!res.ok) {
    return { success: false, errors: data.errors ?? ['Unknown error'] };
  }

  revalidatePath(`/users/${userId}`);
  return { success: true };
}
