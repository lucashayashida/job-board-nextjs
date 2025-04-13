import Image from "next/image";
import peopleImg from "@/public/pessoas2.png";




export default function Sobre() {
  return (
    <section className="flex justify-between gap-4 pb-10">
      <div>
        <h1 className="font-display mb-16 max-w-xl text-5xl font-black">
          O que você procura, <span className="text-blue-400">nós temos</span>!
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p className="max-w-xl">
            O CodanteVagas é a plataforma ideal para profissionais de diversas
            áreas que buscam novas oportunidades e empresas que precisam de
            talentos qualificados.
          </p>
          <p className="max-w-xl">
            Com uma interface intuitiva e fácil de usar, nosso board de vagas
            conecta profissionais de diferentes setores com as melhores empresas
            do mercado.
          </p>
          <p className="max-w-xl">
            Seja você um candidato em busca de seu próximo desafio ou uma
            empresa em busca de novos talentos, o CodanteVagas facilita a
            conexão entre candidatos e empregadores, promovendo o crescimento e
            a inovação em diversos setores.
          </p>
        </div>
      </div>
      <Image 
      src={peopleImg}
      alt="Ilustração de pessoas" 
      className="h-full w-lg" 
      
      />
      
    </section>
  );
}