"use client";
import { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const regions: string[] = [
  "Africa",
  "Europe",
  "Asia",
  "Oceania",
  "Americas",
  "Antarctic",
];

const Dropdown = () => {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") || "";

  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);
    const region = formData.get("region") as string;
    params.set("region", region);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onChange={handleSubmit}
      className="space-y-8 w-[50%] md:w-[15%] md:mr-16"
    >
      <Select name="region">
        <SelectTrigger
          className="bg-bgElement outline-none border-none mt-[1rem] md:mt-[-1rem] font-bold"
          value={region}
        >
          <SelectValue placeholder="Filter by Region" />
        </SelectTrigger>
        <SelectContent className="bg-bgElement cursor-pointer">
          {regions.map((region: string) => {
            return (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </form>
  );
};

export default Dropdown;
