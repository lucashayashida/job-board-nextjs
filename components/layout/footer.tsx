import {  GithubIcon, Instagram, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
    return(
        <footer className=" text-white bg-black py-10">
            <div className="max-w-5xl mx-auto flex justify-between">
                <div className="max-w-sm">
                <Logo bg="dark" />
                    <p>
                        O codante vagas conecta candidatos a empregos ideias, oferecendo funcionalidades intuitivas para a busca e gerenciamento de vagas.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Instagram className="cursor-pointer transition-colors hover:text-blue-400"/>
                    <GithubIcon className="cursor-pointer transition-colors hover:text-blue-400"/>
                    <Mail className="cursor-pointer transition-colors hover:text-blue-400" />
                </div>
            </div>
        </footer>
    )
}