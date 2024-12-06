import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Character() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
    </>
  );
}
