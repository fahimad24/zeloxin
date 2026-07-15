import { signOut } from "@/lib/auth-client";
import { userInfo } from "@/lib/type";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { CirclePlus, LogOut } from "lucide-react";
import Link from "next/link";

export function Profile({ session }: { session: userInfo }) {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={session.name}
            src={typeof session?.image === "string" ? session.image : undefined}
          />
          <Avatar.Fallback delayMs={600}>
            {session.name
              ?.split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={session.name}
                src={
                  typeof session?.image === "string" ? session.image : undefined
                }
              />
              <Avatar.Fallback delayMs={600}>
                {session.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{session.name}</p>
              <p className="text-xs leading-none text-muted">{session.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          {/* <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item> */}
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="settings" textValue="Settings">
            <Link
              href="/add-car"
              className="flex w-full items-center justify-between gap-2"
            >
              <Label>Add New Car</Label>
              <CirclePlus className="size-3.5 text-muted" />
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => signOut()}
            id="logout"
            textValue="Logout"
            variant="danger"
          >
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <LogOut className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
