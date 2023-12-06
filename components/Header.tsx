import Link from "next/link"

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b-2">
      <Link href="/">
        <h1 className="text-2xl font-semibold	">REMI HIGUCHI</h1>
      </Link>
    </div>
  )
}