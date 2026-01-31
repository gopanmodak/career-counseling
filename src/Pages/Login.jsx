import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      toast.error("Email and Password are required");
      return;
    }

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully");
        event.target.reset();
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="bg-gray-500 max-w-md mx-auto p-10 rounded text-gray-300">
        <div className="text-center mb-5">
          <span className="text-2xl font-bold bg-linear-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Welcome To Our Website
          </span>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleOnFormSubmit}>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="border rounded p-2 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border rounded p-2 text-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-md link link-hover">Forget password?</span>
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>

          <p className="text-center">
            New here? Let’s make it official{" "}
            <Link
              to="/register"
              className="link link-hover ml-1 hover:text-blue-700"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
