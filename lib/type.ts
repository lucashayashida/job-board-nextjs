export type Job = {
    id: string;
    title: string;
    company: string;
    city: string;
    salary: number;
    company_website: string;
    schedule: "part-time" | "full time";
    number_of_positions: number;
    description: string;
    requirements: string;

  };