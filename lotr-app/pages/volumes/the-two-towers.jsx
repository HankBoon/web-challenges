import { volumes } from "@/lib/data";
import Link from "next/link";

export default function VolumeTwo() {
  const theTwoTowers = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log(theTwoTowers);
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{theTwoTowers.title}</h1>
      <p>{theTwoTowers.description}</p>
      <ul>
        {theTwoTowers.books.map((book, index) => {
          return (
            <li key={index}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Link href="/volumes/the-return-of-the-king">Next Page</Link>
      <div></div>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Page</Link>
    </>
  );
}
