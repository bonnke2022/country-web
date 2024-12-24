"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchForm() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";

  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    params.set("search", search);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full">
      <div className="flex relative items-center w-[90%] md:w-[40%]">
        <Search className="absolute left-2 pl-2" />
        <Input
          placeholder={`Search for a country...`}
          type="text"
          name="search"
          className="pl-10 outline-none shadow border-0 py-6 rounded-lg bg-bgElement"
          defaultValue={search}
        />
      </div>
    </form>
  );
}

export default SearchForm;
