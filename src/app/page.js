import myImg from "./assets/Hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col m-20 items-start">
        <h1 className="text-5xl">
          Temukan <br /> <span>Lowongan Pekerjaan</span> <br /> Bersama Kami!
        </h1>
        <p className="my-4 mx-2">
          Kowdeen adalah sebuah website yang membantu pencari kerja menemukan
          pekerjaan yang sesuai dengan kriteria mereka. Website ini menyediakan
          berbagai lowongan pekerjaan dari berbagai perusahaan dan industri.
        </p>
        <a href="/jobs" className="btn btn-kowdeen btn-lg rounded-1 me-2">
          Temukan Segera !
        </a>
      </div>
      <div className="mx-4">
        <Image src={myImg} alt="KOWDEEN" className="max-w-xl" />
      </div>
    </div>
  );
}
