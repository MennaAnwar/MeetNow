"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const Card = ({
  className,
  img,
  title,
  description,
  handleClick,
}: CardProps) => {
  return (
    <section
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[20px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="icon" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default Card;
