import Item from "@/components/item";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About",
};

const bucketItem = cva([], {
  variants: {
    variant: {
      completed: ["line-through", "text-gray-11"],
      "in-progress": [
        "before:content-['']",
        "before:w-1",
        "before:h-1",
        "before:bg-accent",
        "before:inline-flex",
        "before:-mt-px",
        "before:rounded-full",
        "before:animate-pulse",
        "before:mr-1",
        "flex",
        "items-center",
      ],
    },
  },
});

const BucketList = () => {
  return (
    <div>
      <h2 className="mb-2 font-medium text-gray-11">Bucket List</h2>
      <div>yo</div>
      <div className="">Travel the world</div>
      <div className="line-through text-gray-11">Travel to Iceland</div>
      <div>yo</div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[450px]">
        <Link
          href="/"
          className="block bg-accent text-gray-12 w-fit rounded-sm p-0.5 mb-4 hover:bg-accent/50 transition duration-100"
        >
          <ArrowLeft size={16} className="shrink-0" />
        </Link>
        <h2 className="font-medium text-gray-11 mb-2">
          I'm still figuring it out.
        </h2>
        <p className="mb-4">
          Exercitation culpa consectetur cillum in voluptate aliqua aliqua Lorem
          incididunt adipisicing magna excepteur. Reprehenderit voluptate qui
          magna. Quis non esse qui laborum. Sint veniam non cupidatat aliqua
          consectetur. Laboris amet do mollit exercitation eu officia nostrud
          pariatur excepteur.
        </p>
        <p className="mb-4">
          Exercitation culpa consectetur cillum in voluptate aliqua aliqua Lorem
          incididunt adipisicing magna excepteur. Reprehenderit voluptate qui
          magna. Quis non esse qui laborum. Sint veniam non cupidatat aliqua
          consectetur. Laboris amet do mollit exercitation eu officia nostrud
          pariatur excepteur.
        </p>
        <div className="grid-cols-2 grid gap-x-8">
          <div>
            <h2 className="font-medium text-gray-11 mb-2">Mantras</h2>
            <ul>
              <li>Seek discomfort</li>
              <li>Do difficult things as they are the most rewarding</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>
          <BucketList />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="relative w-80 h-96">
          <Image
            src="https://images.unsplash.com/photo-1698321170423-5fd260db1ba2?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={""}
            fill
            className="object-cover object-center rounded-sm border border-gray-11"
          />
        </div>
        <div className="relative w-80 h-96">
          <Image
            src="https://images.unsplash.com/photo-1698321170423-5fd260db1ba2?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={""}
            fill
            className="object-cover object-center rounded-sm border border-gray-11"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
