import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        );
      })}
    </ul>
  );
}
