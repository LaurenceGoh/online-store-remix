import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "@remix-run/react";

const Nav = () => {
  return (
    <Navbar isBordered className="bg-gray-100">
      <NavbarBrand>
        <p className="font-bold text-inherit">Online Store</p>
      </NavbarBrand>
    

      <NavbarContent as="div" className="items-center">
        <Input
          classNames={{
            base: "max-w-full h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
        
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="order-history">
                <Link to="/order-history">
                Order History
                </Link>
                </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
