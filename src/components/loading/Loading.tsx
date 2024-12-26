import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center md:h-4/5 md:w-4/5">
        <DotLottieReact
          src="https://lottie.host/f7d0b8c8-ea8a-413e-bfa5-e526748a5456/iDwkYGtOaL.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  )
}
