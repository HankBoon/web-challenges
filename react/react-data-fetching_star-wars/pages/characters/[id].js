import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  // console.log(router);
  // const id = 1;
  const { id } = router.query;

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, isLoading, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  console.log("data:", data);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>failed to load</div>;

  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
