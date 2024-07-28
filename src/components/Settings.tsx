import React from "react";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { SheetSides } from "@/lib/types";

export const Settings = () => {
  return (
    <SheetContent side={SheetSides.Right}>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when youre done.
        </SheetDescription>
      </SheetHeader>
      <div>hej</div>
      <SheetFooter>
        <SheetClose asChild>
          <button type="submit">Save changes</button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
