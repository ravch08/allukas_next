import { ModalCompProps } from "../../types/types";
import { ContactForm, Modal } from "../utils/helper";

const ModalQuestions = ({ closeModal }: ModalCompProps) => {
  return (
    <Modal modalTitle="Ask a Question" handleClose={closeModal}>
      <ContactForm />
    </Modal>
  );
};

export default ModalQuestions;
