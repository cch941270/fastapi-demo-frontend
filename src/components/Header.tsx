import userCircle from "../assets/user-circle.svg";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function Header() {
  const tokenData = localStorage.getItem("accessToken");
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <header className="sticky top-0 h-12 bg-amber-100">
      <div className="absolute w-full h-full flex justify-center items-center">
        FastAPI demo frontend
      </div>
      <div className="relative h-full flex justify-between items-center">
        {tokenData ? (
          <button className="cursor-pointer" onClick={logout}>
            Logout
          </button>
        ) : (
          <span></span>
        )}
        <Link to="/login">
          <img className="w-[40px]" src={userCircle} />
        </Link>
      </div>
    </header>
  );
}
