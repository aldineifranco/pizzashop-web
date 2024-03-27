import { api } from "@/lib/axios";

export interface GetManagedRestaurant {
  name: string;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurant> {
  const response = await api.get("/managed-restaurant");

  return response.data;
}
