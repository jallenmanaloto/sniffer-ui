import { Screenshot } from "@/lib/types";
import Image from 'next/image';

export default function Screenshots({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div className="flex flex-col items-center border-b-2">
      <h2 className="text-2xl font-semibold w-full align-left">
        Screenshots
      </h2>
      <div className="flex justify-center gap-4 py-8">
        {screenshots.map((screenshot, idx: number) => {
          return (
            <Image
              key={idx}
              src={screenshot.image}
              width={50}
              height={10}
              alt="screenshot-image"
            />
          )
        })}
      </div>
    </div>
  )
}
