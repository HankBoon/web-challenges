import { volumes } from "@/lib/data";
import Link from "next/link";

export default function VolumeThree() {
  const theReturnOfTheKing = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{theReturnOfTheKing.title}</h1>
      <p>{theReturnOfTheKing.description}</p>
      <ul>
        {theReturnOfTheKing.books.map((book, index) => {
          return (
            <li key={index}>
              {book.ordinal} - {book.title}
            </li>
          );
        })}
      </ul>
      <Link href="/volumes/the-two-towers">Previous Page</Link>
    </>
  );
}
