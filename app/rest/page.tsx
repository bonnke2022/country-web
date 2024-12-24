import CountriesList from "@/components/CountriesList";
import Dropdown from "@/components/Dropdown";
import SearchForm from "@/components/SearchForm";
import { fetchCountries } from "@/lib/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function Home() {
  const queryClient = new QueryClient();
  // queryClient.invalidateQueries({ queryKey: ["countries"] });

  // await queryClient.prefetchQuery({
  //   queryKey: ["countries", "region", "search"],
  //   queryFn: () => fetchCountries("", ""),
  // });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col min-w-screen items-start md:items-center justify-center ml-1 md:ml-8 mt-[-10px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
          <SearchForm />
          <Dropdown />
        </div>
        <CountriesList />
      </div>
    </HydrationBoundary>
  );
}

export default Home;
