import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

export default function Volumes() {
  const router = useRouter();
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title, id }) => {
          return (
            <>
              <li key={id}>
                <Link href={`/volumes/${slug}`}>{title}</Link>
              </li>
            </>
          );
        })}
        <button
          onClick={() => {
            const randomVolume = getRandomElement(volumes);
            router.push(`/volumes/${randomVolume.slug}`);
          }}
        >
          random volume
        </button>
      </ul>
    </>
  );
}
