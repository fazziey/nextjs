import Link from "next/link";
import myImg from "../assets/Hero.png";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col m-5">
        <h1 className="mb-6 text-teal-600 font-bold text-4xl">
          Jelajahi Peluang Menarik
        </h1>

        <label>Username</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="text"
          placeholder="Enter Username"
        ></input>

        <label>Password</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="password"
          placeholder="Enter Password"
        ></input>

        <div className="flex justify-center text-teal-600">
          <Link href="">Lupa kata sandi?</Link>
        </div>

        <button
          className="mt-4 p-2 bg-cyan-500 text-white rounded-md"
          type="submit"
        >
          Login
        </button>
      </div>
      <div>
        <Image src={myImg} alt="KOWDEEN" className="w-96" />
      </div>
    </div>
  );
}
