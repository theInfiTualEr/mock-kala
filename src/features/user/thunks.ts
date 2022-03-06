import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import ResponseUser from "./types/ResponseUser";
import User from "./types/User";
import UserAddress from "./types/UserAddress";

function generateUser(responseUser: ResponseUser): User {
  const defaultAddress: UserAddress = {
    id: nanoid(),
    city: responseUser.address.city,
    street: responseUser.address.street,
  };

  return {
    id: responseUser.id,
    email: responseUser.email,
    name: { ...responseUser.name },
    phone: responseUser.phone,
    username: responseUser.username,
    addresses: [defaultAddress],
  };
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (): Promise<User> => {
    const response = await fetch("https://fakestoreapi.com/users/1");
    const json: ResponseUser = await response.json();

    // parse
    const user = generateUser(json);

    return user;
  }
);
