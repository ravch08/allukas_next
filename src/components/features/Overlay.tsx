import { OverlayCompProps } from "../../types/types";

const Overlay = ({ handleClose }: OverlayCompProps) => {
  return (
    <div
      onClick={handleClose}
      className="fixed left-0 top-0 z-50 h-screen w-full cursor-pointer overflow-hidden bg-black opacity-85"
    ></div>
  );
};

export default Overlay;
