import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, profile } = useContext(AuthContext);

  

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    if (!name || !photoUrl) {
      toast.error("Name and Photo URL are required");
      return;
    }

   
    profile(name, photoUrl)
      .then(() => {
        toast.success("Profile updated successfully");
       
      })
      .catch((err) => {
        toast.error(err.message);
       
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-5">My Profile</h2>

      <div className="flex flex-col items-center gap-4 mb-5">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <p className="text-gray-700 font-semibold">{user?.displayName}</p>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
        <div className="flex flex-col gap-1">
          <label className="font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="border rounded p-2"
            defaultValue={user?.displayName}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="border rounded p-2"
            defaultValue={user?.photoURL}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          
        >
            Update
          
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
