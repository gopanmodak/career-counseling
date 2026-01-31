import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { register, profile } = useContext(AuthContext);

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const checkbox = event.target.checkbox.checked;

    if (!name || !photoUrl || !email || !password) {
      toast.error("All Field Are Required");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      toast.error(
        "Password Must Contain At Least 6 Characters, One Uppercase Letter And One Lowercase Letter",
      );
      return;
    }
    if (!checkbox) {
      toast.error("Please Accept Our Terms And Condition");
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);
        return profile(name, photoUrl);
      })
      .then(() => {
        toast.success("User Created Successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="bg-gray-200 max-w-md mx-auto p-10 rounded">
        <form
          action=""
          className="flex flex-col gap-5"
          onSubmit={handleOnFormSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Photo Url</label>
            <input
              type="text"
              name="photoUrl"
              id=""
              placeholder="Enter Your Photo Url"
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="border rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
              className="border rounded p-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox"
              id=""
              className="checkbox border border-black"
            />

            <span className="text-md">I agree to the terms and conditions</span>
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>

          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="link link-hover ml-1 hover:text-blue-700"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
