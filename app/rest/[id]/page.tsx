import SingleCountry from "@/components/SingleCountry";
import { fetchSingleCountry } from "@/lib/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["country", id],
    queryFn: () => fetchSingleCountry(id),
  });
  console.log(params);
  console.log(id);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleCountry id={id} />
    </HydrationBoundary>
  );
};

export default SingleProductPage;
