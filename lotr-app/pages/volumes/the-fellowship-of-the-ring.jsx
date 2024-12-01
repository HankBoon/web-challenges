import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeOne() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  console.log(volumes.indexOf(volume));

  const previousVolumeIndex = volumes.indexOf(volume) - 1;
  const nextVolumeIndex = volumes.indexOf(volume) + 1;

  const previousVolume = volumes[previousVolumeIndex];
  const nextVolume = volumes[nextVolumeIndex];

  function PrevNextButton() {
    if (volumes.indexOf(volume) === volumes.length - 1) {
      return (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Page</Link>
      );
    } else if (
      volumes.indexOf(volume) !== volumes.length - 1 &&
      volumes.indexOf(volume) !== 0
    ) {
      return (
        <>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Page</Link>
          <Link href={`/volumes/${previousVolume.slug}`}>Previous Page</Link>
        </>
      );
    } else if (volumes.indexOf(volume) === 0) {
      return <Link href={`/volumes/${nextVolume.slug}`}>Next Page</Link>;
    }
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => {
          return (
            <li key={index}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={volume.cover}
        height={230}
        width={140}
        alt="a picture"
      ></Image>
      <PrevNextButton></PrevNextButton>
    </>
  );
}
