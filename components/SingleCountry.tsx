"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleCountry } from "@/lib/actions";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  CountryProps,
  getCurrency,
  getLanguage,
  getNativeCommonName,
} from "./CountriesList";

export type PageProps = {
  params: { id: string };
};

const SingleCountry = ({ params }: PageProps) => {
  const { id } = params;
  const { data } = useQuery({
    queryKey: ["country", id],
    queryFn: () => fetchSingleCountry(id),
  });

  // console.log(data);

  if (!Array.isArray(data) || data.length === 0) {
    redirect("/");
    // return <h2>Country cannot be found...</h2>;
  }

  const country: CountryProps = data[0];
  return (
    <div className="flex flex-col min-w-screen items-center md:items-start justify-center">
      <Button variant="default" className="bg-bgElement self-start ml-[1rem]">
        <MoveLeft />
        <Link href="/">Back</Link>
      </Button>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20 ml-[0] md:ml-[2rem]">
        <Image
          src={country.flags.png}
          alt={country.name.common}
          width={100}
          height={100}
          unoptimized
          priority
          className="w-[300px] md:w-[400px] h-[300px] md:h-[350px] object-contain ml-[-1rem] mt-[-3rem] md:mt-[0]"
        />
        <div className="flex flex-col gap-4 mt-[-5rem] md:mt-[0]">
          <h4 className="font-extrabold text-xl">{country.name.common}</h4>
          <div className="flex flex-col md:flex-row gap-x-[7rem]">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Native Name:</span>{" "}
                {getNativeCommonName(country)}
              </p>
              <p>
                <span className="font-bold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-bold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-bold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-bold">Capital:</span> {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
              <p>
                <span className="font-bold">Currencies:</span>{" "}
                {getCurrency(country)}
              </p>
              <p>
                <span className="font-bold">Languages:</span>{" "}
                {getLanguage(country)}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <p className="font-bold">Border Countries:</p>
            <div className="flex gap-4">
              {country.borders?.length ? (
                country.borders.map((border: string, index: number) => {
                  return (
                    <Button key={index} className="bg-bgElement">
                      <Link href={`/rest/${border}`} passHref>
                        {border}
                      </Link>
                    </Button>
                  );
                })
              ) : (
                <p>No borders found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
