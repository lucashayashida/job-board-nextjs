
import {  buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="text-center py-10">
            <h1 className=" font-display text-4xl font-bold text-gray-700">Nada encontrado aqui...</h1>
            <img className="mx-auto w-lg mt-10" src="/astronaut.png" alt="Imagem de um barco afundando" />
            <p className="text-3xl font-light text-gray-500">Não foi possível encontrar a página solicitada.</p>
            <a href="/" className={cn( buttonVariants({ variant: "default" }),
            "mt-12 text-lg py-8 px-6",
            )}
        >
        Voltar à Home
        </a>
        </main>
    );
}