import { Job } from "@/lib/type";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


type JobItemProps = {
  job: Job;
};

export default function JobItem({job} : JobItemProps) {
  return (
    <article className="flex w-full items-center justify-between border border-t-4 border-black px-6 py-4 transition-colors hover:border-blue-400">
      <h3 className="font-display text-lg font-medium text-gray-700">
        {job.title}
      </h3>
      <h4 className="font-light text-gray-500">{job.company}</h4>
      <h4 className="font-light text-gray-500">{job.city}</h4>
      <h4 className="font-light text-gray-500">{job.salary}</h4>
      <Link href={`/vagas/${job.id}`}
      className={cn(buttonVariants({ variant: "outline" }))} 
      
      >
        Mais
      </Link>
    </article>
  );
}