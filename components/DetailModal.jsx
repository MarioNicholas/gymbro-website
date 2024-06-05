import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

export function DetailModal({ user }) {
  // const nameRef = useRef();
  // const teleponRef = useRef();
  // const emailRef = useRef();
  // const addressRef = useRef();
  
  const dateFormat = dateString => {
    const date = new Date(dateString);
    const option = { day: '2-digit', month: "long", year: "numeric"}
    return date.toLocaleDateString("en-US", option)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="yellow_outline" className="mx-auto my-2 w-60">
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Username</Label>
            <div className="col-span-3">{user.username}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Gender</Label>
            <div className="col-span-3">{user.gender}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Age</Label>
            <div className="col-span-3">{user.age}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Phone number</Label>
            <div className="col-span-3">081xxxxxxx</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Address</Label>
            <div className="col-span-3">{user.address}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Blood Type</Label>
            <div className="col-span-3">{user.bloodType}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Occupation</Label>
            <div className="col-span-3">{user.occupation}</div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Member Since</Label>
            <div className="col-span-3">{dateFormat(user.createdAt)}</div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
