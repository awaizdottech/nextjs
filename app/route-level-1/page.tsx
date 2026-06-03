import Link from "next/link";

export default function nice() {
  return (
    <div>
      <h1>route-level-1</h1>
      <Link href="/route-level-1/route-level-2/hello">
        Go to route-level-2 with path param "hello"
      </Link>
    </div>
  );
}
