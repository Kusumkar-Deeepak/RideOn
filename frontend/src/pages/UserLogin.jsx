// import React from 'react'

const UserLogin = () => {
  return (
    <div className="p-7 ">
        <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form action="">
        <h3 className="text-xl mb-2">Whats your email</h3>
        <input
          type="email"
          placeholder="email@example.com"
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          required
        />

        <h3 className="text-xl mb-2">Enter Password</h3>
        <input
          type="password"
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          placeholder="password"
          required
        />
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
