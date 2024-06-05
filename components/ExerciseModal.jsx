import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

export function ExerciseModal({ user, activity }) {
  // const nameRef = useRef();
  // const teleponRef = useRef();
  // const emailRef = useRef();
  // const addressRef = useRef();

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const option = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", option);
  };

  const getLatestExerciseData = (data, username) => {
    const filteredData = data.filter((item) => item.username === username);
    if (filteredData.length === 0) {
      return null;
    }
    return filteredData.sort(
      (a, b) => new Date(b.waktu_olahraga) - new Date(a.waktu_olahraga)
    )[0];
  };

  const latestExercise = getLatestExerciseData(activity, user.username);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="yellow_outline" className="mx-auto my-2 w-60">
          View Exercise Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Exercise Detail</DialogTitle>
        </DialogHeader>
        {latestExercise ? (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Username</Label>
              <div className="col-span-3">{latestExercise.username}</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Exercise Type</Label>
              <div className="col-span-3">{latestExercise.jenis_olahraga}</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Exercise Time</Label>
              <div className="col-span-3">
                {dateFormat(latestExercise.waktu_olahraga)}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Repetition 1</Label>
              <div className="col-span-3">
                {latestExercise.repetisi_latihan_1}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Repetition 2</Label>
              <div className="col-span-3">
                {latestExercise.repetisi_latihan_2}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Repetition 3</Label>
              <div className="col-span-3">
                {latestExercise.repetisi_latihan_3}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Calories Burned</Label>
              <div className="col-span-3">{latestExercise.jumlah_kalori}</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Highest Heart Rate</Label>
              <div className="col-span-3">
                {latestExercise.HeartRate_tertinggi}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">No exercise data found for {username}.</div>
        )}
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
