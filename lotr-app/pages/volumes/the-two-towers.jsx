import { volumes } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function VolumeOne() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  const [navButtons, setNavButtons] = useState("middle");

  console.log(volumes.indexOf(volume));

  const previousVolumeIndex = volumes.indexOf(volume) - 1;
  const nextVolumeIndex = volumes.indexOf(volume) + 1;

  const previousVolume = volumes[previousVolumeIndex];
  const nextVolume = volumes[nextVolumeIndex];

  function PrevNextButton() {
    if (navButtons === "last") {
      return (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Page</Link>
      );
    }
    if (navButtons === "first") {
      return <Link href={`/volumes/${nextVolume.slug}`}>Next Page</Link>;
    }
    if (navButtons === "middle") {
      return (
        <>
          {" "}
          <Link href={`/volumes/${previousVolume.slug}`}>Previous Page</Link>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Page</Link>;
        </>
      );
    }
  }

  //   const previousVolume = volumes.find(
  //     (volume, index) => index === volumes.indexOf(volume) - 1
  //   );
  //   const nextVolume = volumes.find((index) => index === volumes[index + 1]);
  //   console.log("prev Volume : ", previousVolume);

  //   function PrevNextButton() {
  //     if (volumes.indexOf(volume) !== 0) {

  //       return (
  //         <Link href={`/volumes/${previousVolume.slug}`}>Previous Page</Link>
  //       );
  //     }
  //     if (volumes.indexOf(volume) !== volumes.length - 1) {
  //       return <Link href={`/volumes/${nextVolume.slug}`}>Next Page</Link>;
  //     }
  //   }

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
      <PrevNextButton></PrevNextButton>
    </>
  );
}
