import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title, id }) => {
          return (
            <li key={id}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link href={`/volumes/${volumes.slug}`}>{title}</Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link> */}
        {/* </li> */}
      </ul>
    </>
  );
}
