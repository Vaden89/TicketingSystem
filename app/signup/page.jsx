"use client";
import { useRouter } from "next/navigation";
export default function Signup() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-indigo-500 text-xl ">
          Sign Up For <span className="font-bold">Dashboard </span>
        </h1>
        <span className="w-full lg:w-80 border-2 border-pink-300 mt-4 "></span>
        <form className="mt-4" action="">
          <div className="flex flex-col ">
            <label htmlFor="username" className="text-indigo-500 text-lg">
              Username:
            </label>
            <input
              className="w-full lg:w-80 text-lg p-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl"
              type="text"
              name="username"
              id="username"
              placeholder="Your Username"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-indigo-500 text-lg" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full lg:w-80 text-lg p-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl"
              placeholder="example@mail.com"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="pwd" className="text-indigo-500 text-lg">
              Password:
            </label>
            <input
              className="w-full lg:w-80 text-lg sp-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl"
              type="password"
              name="pwd"
              id="pwd"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-300 w-full h-11 rounded-xl text-white text-xl cursor-pointer hover:scale-105 btn-transition mt-4"
          >
            Sign Up
          </button>
        </form>
        <span className="font-light mt-4">
          Already have an account?&nbsp;
          <span
            className="cursor-pointer text-indigo-500 hover:font-semibold"
            onClick={() => {
              router.push("/");
            }}
          >
            Sign In
          </span>
        </span>
      </div>
    </div>
  );
}
