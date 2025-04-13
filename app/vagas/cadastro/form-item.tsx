import { Label } from "@/components/ui/label";

export default function FormItem({
  children,
  name,
  description,
}: Readonly<{ children: React.ReactNode; name: string; description: string }>) {
  return (
    <div className="flex gap-24 space-y-2 border-b border-b-gray-100 pb-8">
      <Label className="w-4xl" htmlFor="city">
        <p className="text-gray-600">{name}</p>
        <p className="text-muted-foreground text-sm font-extralight">
          {description}
        </p>
      </Label>
      {children}
    </div>
  );
}