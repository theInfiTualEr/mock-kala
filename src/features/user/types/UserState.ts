import User from "./User";

type UserState = {
  user: undefined | User;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
};

export default UserState;
