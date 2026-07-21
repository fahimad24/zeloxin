"use server";
import { headers } from "next/headers";
import { auth } from "./auth";
import { ICar } from "./type";

export const getSession = async () => {
    const result = await auth.api.getSession({
        headers: await headers()
    })
    const session = result?.session;
    const { userId, token } = session || {};
    return { userId, token, session };

}

const API_BASE_URL: string = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

// get request to fetch all cars
export async function fetchAllCars(): Promise<ICar[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/cars`);
    if (!response.ok) {
      console.error(`Error fetching cars: HTTP error! status: ${response.status}`);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
}

// post request to add a new car
export async function addNewCar(carData: ICar): Promise<unknown> {
  try {
    const response = await fetch(`${API_BASE_URL}/add-new-car`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding new car:', error);
    throw error;
  }
}