import Link from "next/link"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  PlusIcon,
} from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header>
      <div className="text-center bg-red-500 text-white font-bold">UNDER CONSTRUCTION, elements may not work</div>
      <div className="flex items-center justify-between p-4 border-b-2">
        <Link href="/">
          <h1 className="text-2xl font-semibold	">REMI HIGUCHI</h1>
        </Link>
        <div id="navi" className="flex gap-4">
          <Link href="/about">
            <span className="">LOG</span>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="border-1 border-black p-1 inline-flex items-center justify-center">
                <PlusIcon className="lg" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white border-1 border-black"
                sideOffset={5}
                align="end"
              >
                <DropdownMenu.Item className="px-3 py-2 hover:bg-neutral-100" >
                  <Link href="/forfriends">
                    <span className="">For Friends</span>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="px-3 py-2 hover:bg-neutral-100">
                  <Link href="/about">
                    <span className="">About</span>
                  </Link>
                </DropdownMenu.Item>

              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

        </div>
      </div>
    </header>
  )
}