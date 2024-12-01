import { volumes } from "@/lib/data";
import Link from "next/link";

export default function VolumeOne() {
  const TheFellowShipOfTheRing = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(TheFellowShipOfTheRing);
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{TheFellowShipOfTheRing.title}</h1>
      <p>{TheFellowShipOfTheRing.description}</p>
      <ul>
        {TheFellowShipOfTheRing.books.map((book, index) => {
          return (
            <li key={index}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Link href="/volumes/the-two-towers">Next Page</Link>
    </>
  );
}
