import { useSelector } from "react-redux";
import CartSide from "../../features/cart/CartSide";
import { selectSideStatus } from "../../features/side/sideSlice";
import ProfileSide from "../../features/user/ProfileSide";
import FilterSide from "../filter/FilterSide";
import ContactSide from "./ContactSide";

const useSide = (): JSX.Element | null => {
  const sideStatus = useSelector(selectSideStatus);

  if (sideStatus === "profile") {
    return <ProfileSide />;
  }

  if (sideStatus === "cart") {
    return <CartSide />;
  }

  if (sideStatus === "contact") {
    return <ContactSide />;
  }

  if (sideStatus === "filter") {
    return <FilterSide />;
  }

  return null;
};

export default useSide;
