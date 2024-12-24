// "use server";
import { CountryProps } from "@/components/CountriesList";
import axios from "axios";
import { revalidatePath } from "next/cache";

const restUrl = "https://restcountries.com/v3.1/all";
const singleCountryUrl = "https://restcountries.com/v3.1/name/";
const regionUrl = "https://restcountries.com/v3.1/region/";

export async function fetchCountries(search: string, region: string) {
  try {
    const response = await axios(restUrl, {});
    const countries = await response.data;
    const filteredCountry = countries.filter((item: CountryProps) => {
      if (search) {
        const matchesSearch = item.name.common
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesSearch;
      }
      if (region) {
        const matchesRegion = item.region
          .toLowerCase()
          .includes(region.toLowerCase());
        return matchesRegion;
      } else {
        return countries;
      }
    });
    return filteredCountry;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchCountry(id: number) {
  try {
    const response = await axios(`${restUrl}${id}`);
    const country = await response.data;
    return country;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchSingleCountry(country: string) {
  try {
    const response = await axios(`${singleCountryUrl}${country}`);
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
