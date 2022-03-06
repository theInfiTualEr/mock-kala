import UserAddress from "./UserAddress";

type User = {
  id: number;
  email: string;
  username: string;
  name: { firstname: string; lastname: string };
  addresses: UserAddress[];
  phone: string;
};

export default User;
