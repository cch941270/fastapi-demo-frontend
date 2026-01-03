import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <>
      <Header />
      <LoginForm />
      <Link to="/createAccount">
        <div className="text-center pb-[20px] bg-lime-50">Create Account</div>
      </Link>
    </>
  );
}
