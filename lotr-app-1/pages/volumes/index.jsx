import { introduction } from "../../lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-ring.jsx">
            The Fellowship of the Rings
          </Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers.jsx">The two Towers</Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-king.jsx">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
