import { useState } from "react";

import Overlay from "../../features/Overlay";
import { ModalQuestions, ModalShare, ModalSize } from "../../utils/helper";

const ProductShareNSize = () => {
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showQuestionsModal, setShowQuestionsModal] = useState(false);

  const handleShowSizeModal = () => {
    setShowSizeModal(true);
    document.querySelector("body")!.style.overflowY = "hidden";
  };

  const handleShowShareModal = () => {
    setShowShareModal(true);
    document.querySelector("body")!.style.overflowY = "hidden";
  };

  const handleShowQuestionsModal = () => {
    setShowQuestionsModal(true);
    document.querySelector("body")!.style.overflowY = "hidden";
  };

  const handleCloseSizeModal = () => {
    setShowSizeModal(false);
    document.querySelector("body")!.style.overflowY = "initial";
  };
  const handleCloseShareModal = () => {
    setShowShareModal(false);
    document.querySelector("body")!.style.overflowY = "initial";
  };
  const handleCloseQuestionsModal = () => {
    setShowQuestionsModal(false);
    document.querySelector("body")!.style.overflowY = "initial";
  };

  return (
    <>
      {showSizeModal ? (
        <>
          <ModalSize closeModal={handleCloseSizeModal} />
          <Overlay handleClose={handleCloseSizeModal} />
        </>
      ) : null}
      {showShareModal ? (
        <>
          <ModalShare closeModal={handleCloseShareModal} />
          <Overlay handleClose={handleCloseShareModal} />
        </>
      ) : null}
      {showQuestionsModal ? (
        <>
          <ModalQuestions closeModal={handleCloseQuestionsModal} />
          <Overlay handleClose={handleCloseQuestionsModal} />
        </>
      ) : null}

      <div className="mt-6 flex w-full items-center gap-6 border-b border-gray-200 pb-4">
        <button
          onClick={handleShowSizeModal}
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
          </svg>
          <span>Size Guide</span>
        </button>
        <button
          className="flex items-center gap-2"
          onClick={handleShowQuestionsModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Ask a Question</span>
        </button>
        <button
          onClick={handleShowShareModal}
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Share</span>
        </button>
      </div>
      {}
    </>
  );
};

export default ProductShareNSize;
