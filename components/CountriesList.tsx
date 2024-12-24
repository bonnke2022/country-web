"use client";

import { fetchCountries } from "@/lib/actions";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export type CountryProps = {
  name: {
    common: string;
    nativeName: Record<string, { common: string; official: string }>;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
    png: string;
  };
  subregion: string;
  tld: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders: string[];
};

export const getNativeCommonName = (
  country: CountryProps
): string | undefined => {
  const nativeNameObject = country.name.nativeName;
  const firstKey = Object.keys(nativeNameObject)[0];
  return nativeNameObject[firstKey]?.common;
};

export const getCurrency = (country: CountryProps): string | undefined => {
  const currencyObject = country.currencies;
  const firstKey = Object.keys(currencyObject)[0];
  return currencyObject[firstKey]?.name;
};

export const getLanguage = (country: CountryProps): string | undefined => {
  const languageObject = country.languages;
  const firstKey = Object.keys(languageObject)[0];
  return languageObject[firstKey];
};

const CountriesList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const region = searchParams.get("region") || "";

  const { data, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: () => fetchCountries(search, region),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  // console.log(data);
  if (isPending)
    return <h2 className="text-xl font-medium mt-6">Please wait...</h2>;
  if (!data) {
    return <h2 className="font-bold text-xl">No Countries found...</h2>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-4 md:gap-x-8 lg:gap-x-16 gap-y-8  mt-6 w-full overflow-x-hidden">
      {data.map((country: CountryProps) => {
        return (
          <Link
            href={`/rest/${country.name.common}`}
            key={country.name.common}
            className="bg-bgElement w-[300px] h-auto rounded-bl-lg rounded-br-lg"
          >
            <Image
              src={country.flags.png}
              alt={country.name.common}
              className="flex rounded-tl-lg rounded-tr-lg w-[300px] h-[150px]"
              width={200}
              height={200}
              priority
              unoptimized
            />
            <div className="flex flex-col items-start pl-4 pt-6 pb-6 h-[150px]">
              <h4 className="font-extrabold text-xl">{country.name.common}</h4>
              <p>
                <span className="font-bold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-bold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-bold">Capital:</span> {country.capital}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
