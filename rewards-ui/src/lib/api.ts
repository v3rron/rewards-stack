import { API_URL } from './constants';

type JsonResponse = {
  success: boolean;
  status?: number;
  data?: any;
  errors?: string[];
};

const errorResponse = (status: number = 400, error: string = 'Unknown error'): JsonResponse => {
  return { success: false, status, data: null, errors: [error] };
};

const successResponse = (data: any): JsonResponse => {
  return { success: true, data };
};

const parseResponse = async (res: Response) => {
  try {
    const data = await res.json();

    if (!res.ok) {
      const errorMsg = (data.errors?.length && data.errors[0]) || data.message || 'Unknown error';
      return errorResponse(res.status, errorMsg);
    }

    return successResponse(data);
  } catch {
    return errorResponse();
  }
};

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}/users`, { cache: 'no-store' });
    return parseResponse(res);
  } catch {
    return errorResponse(500);
  }
}

export async function getUser(userId: string) {
  try {
    const res = await fetch(`${API_URL}/users/${userId}`);
    return parseResponse(res);
  } catch {
    return errorResponse(500);
  }
}

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    return parseResponse(res);
  } catch {
    return errorResponse(500);
  }
}

export async function getRedemptions(userId: string) {
  try {
    const res = await fetch(`${API_URL}/redemptions?user_id=${userId}`);
    return parseResponse(res);
  } catch {
    return errorResponse(500);
  }
}
