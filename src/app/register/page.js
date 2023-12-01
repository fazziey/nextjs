import Link from "next/link";
import myImg from "../assets/Hero.png";
import Image from "next/image";

export default function Register() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col m-5">
        <h1 className="mb-6 text-teal-600 font-bold text-4xl">
          Jelajahi Peluang Menarik
        </h1>

        <label>Nama Depan</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="text"
          placeholder="Enter your first name"
        ></input>

        <label>Nama Belakang</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="text"
          placeholder="Enter your last name"
        ></input>

        <label>Email</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="email"
          placeholder="Enter your email"
        ></input>

        <label>No Telepon</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="text"
          placeholder="Enter your phone number"
        ></input>

        <label>Password</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="password"
          placeholder="Enter your password"
        ></input>

        <label>Konfirmasi Password</label>
        <input
          className="my-2 border-2 px-4 border-grey-100 rounded-md"
          type="password"
          placeholder="Enter your confirmation password"
        ></input>

        <div className="flex justify-center text-teal-600">
          <Link href="/login">Sudah punya akun?</Link>
        </div>
        <button
          className="mt-4 p-2 bg-cyan-500 text-white rounded-md"
          type="submit"
        >
          Register
        </button>
      </div>
      <div>
        <Image src={myImg} alt="KOWDEEN" className="w-96" />
      </div>
    </div>
  );
}
