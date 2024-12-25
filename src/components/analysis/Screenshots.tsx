import { Screenshot } from "@/lib/types";
import Image from 'next/image';

export default function Screenshots({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div className="flex flex-col items-center border-b-2">
      <h2 className="text-2xl font-semibold w-full align-left tracking-wider py-4">
        Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 py-8">
        {screenshots.map((screenshot, idx: number) => {
          const imageSrc = `https://ik.imagekit.io/iakg6rt33o/${screenshot.image}`;
          return (
            <div key={idx} className="col-span-1 py-2">
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
          )
        })}
      </div>
    </div>
  )
}
