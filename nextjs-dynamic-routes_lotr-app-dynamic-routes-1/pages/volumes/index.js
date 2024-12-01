import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "@/lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handlerFunction() {
    let randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  console.log("random volume :", getRandomElement(volumes));
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }, index) => {
          return (
            <li key={index}>
              <Link href={`./volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handlerFunction}>random page</button>
    </>
  );
}
