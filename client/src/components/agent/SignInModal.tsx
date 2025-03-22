import React, { useEffect } from "react";
import { gsap } from "gsap";
import { emailBlackIcon, googleIcon } from "../../assets/icons";
interface SignInModalProps {
  show: boolean;
  onClose: () => void;
}
const SignInModal = ({ show, onClose }: SignInModalProps) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (show) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [show]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  if (!show) return null;

  return (
    <div className="w-full flex items-center justify-center bg-black/20 h-screen fixed top-0 left-0 z-[4000]">
      <div
        ref={modalRef}
        className="w-full max-w-[328px] h-full flex flex-col justify-between max-h-[491px] rounded-[30px] drop-shadow-md bg-white p-5 gap-2 overflow-hidden"
      >
        <div className="flex flex-col leading-6">
          <h2 className="text-[min(3vw,24px)] text-black font-bold w-full">
            Sign In
          </h2>
          <p className="text-[min(3vw,12px)] text-[#2d2d2d] font-medium">
            Just some details to get you in.!
          </p>
        </div>

        <div className="w-ful flex flex-col gap-5">
          <form className="w-full h-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email / phone"
              className="w-full h-[33px] border-[#757575] border-[1px] rounded-l-full rounded-r-full px-4 text-[12px] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[33px] border-[#757575] border-[1px] rounded-l-full rounded-r-full px-4 text-[12px] focus:outline-none"
            />
            <button className="w-full flex h-[40px] text-white text-[14px] font-bold flex-row items-center justify-center rounded-l-full rounded-r-full bg-[#4BAE4F]">
              Sign In
            </button>
          </form>

          <div className="w-full flex flex-row gap-3 items-center">
            <hr className="w-full border-[#757575]/20 h-[1px]" />
            <p className="text-[12px] text-black font-medium">Or</p>
            <hr className="w-full border-[#757575]/20 h-[1px]" />
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="flex flex-row cursor-pointer px-2 h-[34px] border-[#D9D9D9] border-[1px] rounded-[5px] w-full items-center gap-5">
              <img
                src={googleIcon}
                alt="google icon"
                className="w-[16px] h-[16px]"
              />
              <p className="text-[12px] text-[#757575] text-start font-medium w-[calc(100%-20px)]">
                Continue with Google
              </p>
            </button>

            <button className="flex flex-row cursor-pointer px-2 h-[34px] border-[#D9D9D9] border-[1px] rounded-[5px] w-full items-center gap-5">
              <img
                src={emailBlackIcon}
                alt="google icon"
                className="w-[15px] h-[10px]"
              />
              <p className="text-[12px] text-[#757575] text-start font-medium w-[calc(100%-20px)]">
                Continue with email/username
              </p>
            </button>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <a
            href="#"
            className="text-[11px] text-[#2d2d2d] font-medium cursor-pointer"
          >
            Terms & Conditions
          </a>

          <a
            href="#"
            className="text-[11px] text-[#2d2d2d] font-medium cursor-pointer"
          >
            Support
          </a>

          <a
            href="#"
            className="text-[11px] text-[#2d2d2d] font-medium cursor-pointer"
          >
            Customer Care
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
