import Link from "next/link"
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@nextui-org/react";
import {
  PlusIcon,
} from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between p-4 border-b-2">
        <Link href="/">
          <h1 className="text-2xl font-semibold	">REMI HIGUCHI</h1>
        </Link>
        <div id="navi" className="flex gap-4 items-center">
          <Link href="/log">
            <span className="">LOG</span>
          </Link>
          <Dropdown
            classNames={{
              content: "p-0 rounded-none border border-black",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="bordered"
                size="sm"
                radius="full"
                isIconOnly
                className="border-1 border-black"
              >
                <PlusIcon className="md" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Link Actions"
              className="p-0"
              radioGroup="navi"
              itemClasses={{
                base: [
                  "rounded-none",
                  "transition-opacity",
                  "data-[hover=true]:bg-neutral-100",
                ],
                description: [
                  "text-xs",
                  "data-[hover=true]:text-neutral-200",
                ],
              }}
            >
              <DropdownItem description="Account Needed" key="friends" href="/forfriends" >
                For Friends
              </DropdownItem>
              <DropdownItem description="Digital Business Card" key="about" href="/digitalcard">
                Card
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}