import { ModalCompProps } from "../../types/types";
import { Modal, SocialIcons } from "../utils/helper";

const ModalShare = ({ closeModal }: ModalCompProps) => {
  return (
    <Modal modalTitle="Share" handleClose={closeModal}>
      <div className="form-control p-8">
        <label className="mb-2 block pl-2 font-medium">Copy link</label>

        <input
          type="text"
          value="https://demo-alukas.myshopify.com/products/circle-of-light-heart-earrings"
        />
        <hr className="my-8" />
        <SocialIcons />
      </div>
    </Modal>
  );
};

export default ModalShare;
