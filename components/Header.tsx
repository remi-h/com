import Link from "next/link"
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@nextui-org/react";
import {
  PlusIcon,
} from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between p-4 border-b-2">
        <Link href="/">
          <h1 className="text-2xl font-semibold	">POL LOZANO</h1>
        </Link>
      </div>
    </header>
  )
}