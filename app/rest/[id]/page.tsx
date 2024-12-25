import SingleCountry from "@/components/SingleCountry";
import { fetchSingleCountry } from "@/lib/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export type PageProps = {
  params: { id: string };
};

const SingleProductPage = async ({ params }: PageProps) => {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["country", id],
    queryFn: () => fetchSingleCountry(id),
  });
  console.log(id);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleCountry id={id} />
    </HydrationBoundary>
  );
};

export default SingleProductPage;
