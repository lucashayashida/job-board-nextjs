
import {  buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import astronautImg from "@/public/astronaut.png"
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="text-center py-10 max-w-4xl mx-auto">
            <h1 className=" font-display text-4xl font-bold text-gray-700">Nada encontrado aqui...</h1>
            <Image 
            className="mx-auto w-xs mt-10" 
            src={astronautImg}
            alt="Imagem de um barco afundando" 
            />
            <p className="text-3xl font-light text-gray-500">Não foi possível encontrar a página solicitada.</p>
            
        <Link href="/" className={cn( buttonVariants({ variant: "default" }),
            "mt-6",
            )}
        >
        Voltar à Home
        </Link>
        </main>
    );
}   