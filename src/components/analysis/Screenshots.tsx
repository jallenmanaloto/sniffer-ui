import { Screenshot } from "@/lib/types";
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Screenshots({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div className="flex flex-col items-center border-b-2">
      <h2 className="text-2xl font-semibold w-full align-left tracking-wider py-4">
        Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-8">
        {screenshots.map((screenshot, idx: number) => {
          const imageSrc = `https://ik.imagekit.io/iakg6rt33o/${screenshot.image}`;
          return (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="col-span-1 border border-primary/20 dark:border-teal-800 p-2">
                  <div className="relative w-48 h-[100px]">
                    <Image
                      src={imageSrc}
                      alt="screenshot-image"
                      fill
                      className="cursor-pointer"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="flex w-[300px] justify-center p-0">
                <VisuallyHidden>
                  <DialogTitle>
                    Screenshot Image
                  </DialogTitle>
                </VisuallyHidden>
                <div className="flex justify-center w-full h-[600px] overflow-auto">
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSrc}
                      alt="screenshot-image"
                      height={500}
                      width={500}
                      className="cursor-pointer"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </div>
  )
}
