import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-between p-4 items-center shadow-md">
        <div className="text-2xl ml-6">
          <Link href="/" className="font-bold">
            Kow<span className="font-bold text-teal-600">Deen</span>
          </Link>
        </div>
        <div>
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="/company">Company</Link>
          <Link href="/jobapplication" className="px-4">
            Job-Application
          </Link>
          <Link href="/jobs">Jobs</Link>
        </div>
        <div>
          <Link href="/register" className="text-teal-600 px-4">
            Register
          </Link>
          <Link
            href="/login"
            className="border-2 px-4 text-teal-600 border-teal-600 rounded-md"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}
