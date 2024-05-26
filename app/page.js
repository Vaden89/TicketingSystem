"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthService } from "./services/auth.service";
import { useAuth } from "./providers/auth.context";
import { Loading } from "./components/Loading";

export default function Home() {
  const router = useRouter();
  const [displaySignUp, setdisplaySignUp] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //idg
  const { setUser, user } = useAuth();

  const login = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      if (email.trim() === " " || password.trim() === "") {
        setErrorMessage("There's an Empty Input field!");
        throw "Empty Input field";
      }
      const res = await AuthService.login(email, password);
      router.replace("/dashboard");
    } catch (error) {
      throw new Error("There was an error logining in", error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (email.trim() === " " || password.trim() === "" || name.trim()) {
      setErrorMessage("There's an Empty Input field!");
      throw new Error("Empty Input field");
    } else {
      try {
        setLoading(true);
        const res = await AuthService.createUser(email, password, name);
        console.log(res);
      } catch (error) {
        console.log(error);
        throw new Error("There is an Error creating a new user", error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (displaySignUp) {
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full lg:w-80 text-lg sp-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl p-4"
                type="password"
                name="pwd"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-pink-300 w-full h-11 rounded-xl text-white text-xl cursor-pointer hover:scale-105 btn-transition mt-4"
              onClick={(e) => register(e)}
            >
              Sign Up
            </button>
          </form>
          <span className="font-light mt-4">
            Already have an account?&nbsp;
            <span
              className="cursor-pointer text-indigo-500 hover:font-semibold"
              onClick={() => {
                setdisplaySignUp(false);
              }}
            >
              Sign In
            </span>
          </span>
          <span className="text-red-500">{errorMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-indigo-500 text-xl ">
          Sign In To <span className="font-bold">Dashboard </span>
        </h1>
        <span className="w-full lg:w-80 border-2 border-pink-300 mt-4 "></span>
        <form className="mt-4" action="">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-indigo-500 text-lg">
              Email:
            </label>
            <input
              className="w-full lg:w-80 text-lg p-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col mt-3">
            <label htmlFor="pwd" className="text-indigo-500 text-lg">
              Password:
            </label>
            <input
              className="w-full lg:w-80 text-lg sp-4 h-10 border-2 border-solid border-pink-400 mt-1 rounded-xl p-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="pwd"
              id="pwd"
            />
          </div>
          <button
            type="submit"
            className="bg-pink-300 w-full h-11 rounded-xl text-white text-xl cursor-pointer hover:scale-105 btn-transition mt-4"
            onClick={(e) => login(e)}
          >
            Sign In
          </button>
        </form>
        <span className="font-light mt-4">
          Already have an account?&nbsp;
          <span
            className="cursor-pointer text-indigo-500 hover:font-semibold"
            onClick={() => setdisplaySignUp(true)}
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
}
