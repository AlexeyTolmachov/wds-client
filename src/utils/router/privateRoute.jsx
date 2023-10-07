import { Navigate } from "react-router";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
const PrivateRoute = () => {
  return isAuth() ? <AdminPanel /> : <Navigate to={"form"} />;
};

export default PrivateRoute;

function isAuth() {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("An error occurred while checking authentication:", error);
    return false;
  }
}
