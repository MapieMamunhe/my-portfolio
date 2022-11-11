import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/index";
import Separator from "../components/separator";
import myPic from "../../assets/images/profile.jpg";
import Footer from "../components/footer";
import { useState } from "react";
import { isTemplateExpression } from "typescript";

interface InterfaceProject {
  id: number;
  name: string;
  description: string;
}
export default function Home() {
  const [projects, setProjects] = useState<InterfaceProject[]>([
    {
      id: 0,
      name: "SGFAT",
      description: "",
    },
    {
      id: 1,
      name: "AGRITech-Culture",
      description: "",
    },
    {
      id: 2,
      name: "Sistema de Controlo de Transportes",
      description: "",
    },
  ]);
  const [currentProject, setCurrentProject] = useState<InterfaceProject | null>(
    null
  );
  return (
    <>
      <Header />
      <section className="mx-4 my-7">
        <h2 className="font-bold text-4xl mb-4">Desenvolvedor</h2>
        <article className="text-base">
          <p>Sou fã de animes e de cultura em geral</p>
          <p>Me divirto tocando violão</p>
          <p>E ajudando outros....</p>
        </article>
      </section>
      <Separator />
      <div className="h-60 my-6 overflow-clip rounded-lg ">
        <Image
          className=" scale-150 relative right-14 top-[100px] bg-blue-500 bg-blend-color"
          src={myPic}
          alt="My profile picture"
        />
      </div>
      <Separator />
      <section className="mx-4 py-9">
        <div className="title-text">Projectos</div>
        <ul>
          {projects.map((item) => (
            <Link
              key={item.id}
              href={"#" + item.name}
              className="click-me "
              onClick={() => setCurrentProject(item)}
            >
              <li className="click-me ">{item.name}</li>
            </Link>
          ))}
        </ul>
      </section>
      <Separator />
      {currentProject ? (
        <>
          <main className="mx-4 my-9">
            <h2 className="text-right title-text">{currentProject.name}</h2>
            <p className="py-4 flex">{currentProject.description}</p>
            <ul>
              <li className="btn">Github</li>
            </ul>
          </main>
          <Separator />
        </>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}