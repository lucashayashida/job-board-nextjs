import {  buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import peopleImg1 from "@/public/people.png"

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-black font-divertida w-xl mx-auto">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Link 
      href={"/vagas"}
        className= {cn("mt-12 cursor-pointer", buttonVariants({ variant: "outline" }))}>
        Busque Uma Vaga
      </Link>
      <Image
        src={peopleImg1}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12"
      />
    </section>
  );
}