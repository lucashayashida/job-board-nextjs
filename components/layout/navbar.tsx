import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Logo from "./logo";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="w-full flex items-center justify-between max-w-5xl mx-auto py-6">
            <Logo />
            <ul className="font-display flex items-center gap-6">
                <Link href="/" className={cn(buttonVariants({ variant: "link" }))}>Home</Link>
                <Link href="/sobre" className={cn(buttonVariants({ variant: "link" }))}>Sobre</Link>
                <Link href="/vagas" className={cn(buttonVariants({ variant: "link" }))}>Vagas</Link>
                <Link href="vagas/cadastro" className={cn(buttonVariants({ variant: "link" }))}>Cadastrar Vagas</Link>
            </ul>
        </nav>
    )
}