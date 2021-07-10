import Link from "next/link";

export default function Index() {
  return (
    <ul>
      {[...Array(10).keys()].map((i) => (
        <li key={i}>
          <Link href={`sample${(i + 1).toString().padStart(2, "0")}`}>
            <a>Sample {i + 1}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
