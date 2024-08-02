import { createPortal } from "react-dom";
import { ModalProps } from "../../types/types";

const Modal = ({ children, modalTitle, handleClose }: ModalProps) => {
	return createPortal(
		<div className="fixed left-1/2 top-1/2 z-50 flex max-h-[80vh] min-h-48 w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col overflow-auto bg-white">
			<div className="sticky left-0 top-0 flex items-center justify-center border-b border-gray-300 bg-white py-4">
				<h2 className="text-lg font-medium">{modalTitle}</h2>
				<button onClick={handleClose} className="absolute right-4 top-5">
					<svg
						fill="none"
						strokeWidth={1.5}
						className="h-6 w-6"
						viewBox="0 0 24 24"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
				</button>
			</div>
			{children}
		</div>,
		document.getElementById("modal")!
	);
};

export default Modal;
