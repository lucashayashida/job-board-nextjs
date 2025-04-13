"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormItem from "./form-item";
import Form from "next/form";
import { createJob } from "@/lib/actions";
import { useActionState } from "react";
import { CircleAlert } from "lucide-react";




export default function Cadastro() {

  const [state, createJobAction, pending]= useActionState(createJob, null);

  return (
    <main>
      <h2 className="font-display mb-12 text-2xl font-bold">Cadastrar Vaga</h2>
      <Card className="mx-auto w-full py-8">
        <Form action={createJobAction}>
          <CardContent className="space-y-6">
          {state?.error && (
              <div className="flex items-center gap-4 rounded-md border border-red-200 bg-red-100 p-4 py-6 text-red-900">
                <CircleAlert className="inline-block h-6 w-6" />
                {state.message}
              </div>
            )}
            <FormItem
              name="Título da Vaga"
              description="Este será o título da vaga que será exibido na busca. Máximo de 30 caracteres"
            >
              <Input
                className="rounded-xs border-gray-500"
                id="title"
                name="title"
                maxLength={30}
              />
            </FormItem>

            <FormItem
              name="Nome da Empresa"
              description="Nome da empresa que será exibido na busca. Não é necessário colocar a razão social."
            >
              <Input
                className="rounded-xs border-gray-500"
                id="company"
                name="company"
              />
            </FormItem>

            <FormItem
              name="Website da Empresa"
              description="Website - se a vaga trouxer um site próprio, coloque aqui."
            >
              <Input
                className="rounded-xs border-gray-500"
                id="company_website"
                name="company_website"
                type="url"
              />
            </FormItem>

            <FormItem
              name="Cidade"
              description="Coloque a cidade em que a vaga é oferecida. Se for remoto, preencha com 'remoto'"
            >
              <Input
                className="rounded-xs border-gray-500"
                id="city"
                name="city"
              />
            </FormItem>

            <FormItem
              name="Período"
              description="Escolha entre meio-período ou período integral"
            >
              <select
                className="rounded-xs border-gray-500"
                id="schedule"
                name="schedule"
              >
                <option value="full-time">Período Integral</option>
                <option value="part-time">Meio-Período</option>
              </select>
            </FormItem>

            <FormItem name="Salário" description="Salário mensal">
              <Input
                className="rounded-xs border-gray-500"
                id="salary"
                name="salary"
              />
            </FormItem>

            <FormItem
              name="Quantidade de Vagas"
              description="Quantas vagas abertas existem para esta posição"
            >
              <Input
                className="rounded-xs border-gray-500"
                id="number_of_positions"
                name="number_of_positions"
              />
            </FormItem>

            <FormItem
              name="Descrição da Vaga"
              description="Coloque em detalhes as principais tarefas esperadas nesta vaga."
            >
              <Textarea
                id="description"
                name="description"
                className="min-h-[100px] rounded-xs border-gray-500"
              />
            </FormItem>

            <FormItem
              name="Requisitos"
              description="O que você espera do seu candidato? Detalhe aqui."
            >
              <Textarea
                id="requirements"
                name="requirements"
                className="min-h-[100px] rounded-xs border-gray-500"
              />
            </FormItem>
          </CardContent>

          <CardFooter>
            <Button
              disabled={pending}
              type="submit"
              className="ml-auto w-full rounded-none px-10 md:w-auto"
            >
              {pending ? "Salvando..." : "Submeter"}
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </main>
  );
}