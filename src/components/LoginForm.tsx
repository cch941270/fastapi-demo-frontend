import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type AccessToken = {
  access_token: string,
  token_type: string,
}

type fetchError = {
  detail: string
}

export default function LoginForm() {
  const [token, setToken] = useState<AccessToken | null>(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token.access_token);
      localStorage.setItem("tokenType", token.token_type);
    }
  }, [token]);

  async function getToken(formData: FormData) {
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
    const response = await fetch(`${baseApiUrl}/token/`, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const accessToken: AccessToken = await response.json();
      setToken(accessToken);
      navigate("/");
    } else {
      const error: fetchError = await response.json();
      alert(error.detail)
    }
  }

  return (
    <>
      <form
        className="form flex flex-col items-center py-[20px] mt-[5px] bg-lime-50"
        action={getToken}
      >
        <label className="my-[5px]">
          Username:
          <input type="text" name="username" required />
        </label>

        <label className="my-[5px]">
          Password:
          <input type="password" name="password" required />
        </label>
        <button className="cursor-pointer">Login</button>
      </form>
    </>
  );
}
