"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-64 flex flex-col justify-center items-center gap-8 absolute top-[25%] right-[19%] text-center ">
      <span className="text-xl text-indigo-500">
        Sign In To <span className="font-extrabold">DashBoard</span>
      </span>
      <span className="w-full border-2 border-pink-300"></span>
      <div className="flex flex-col items-start gap-2">
        <span className="text-indigo-500 text-lg">Username</span>
        <input
          className="w-full text-lg p-4 h-10 border-2 border-solid border-pink-400  rounded-xl"
          type="text"
          name="username"
          id=""
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="text-indigo-500 text-lg">Password</span>
        <input
          className="w-full text-lg p-4 h-10 border-2 border-solid border-pink-400 rounded-xl"
          type="password"
          name="pwd"
          id=""
        />
      </div>
      <button
        type="submit"
        className="bg-pink-300 w-full h-11 rounded-xl text-white text-xl cursor-pointer"
      >
        Sign In
      </button>
      <span className="font-light">
        Don&apos;t have an account?&nbsp;
        <span
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign Up
        </span>
      </span>
    </div>
  );
}
