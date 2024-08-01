import { ModalCompProps } from "../../types/types";
import { Modal } from "../utils/helper";

const ModalSize = ({ closeModal }: ModalCompProps) => {
  return (
    <Modal modalTitle="Size Guide" handleClose={closeModal}>
      <div className="p-8">
        <span className="mb-4 block text-2xl font-medium leading-tight">
          Jewelry Sizing Guide
        </span>
        <p>
          This guide will help you find the perfect fit for your jewelry.
          Remember, sizing can vary between brands, so it's always a good idea
          to refer to the specific size chart provided by the seller if
          available.
        </p>

        <span className="mb-4 mt-8 block text-2xl font-medium leading-tight">
          Rings
        </span>
        <p>
          Rings should fit comfortably on your finger without feeling too loose
          or constricting. To measure your finger size, you can:
        </p>
        <p className="mt-4">
          Use a ring sizer tool: These are available online or at most jewelry
          stores. Wrap the sizer tool around your finger until it fits snugly,
          then note the size indicated. Measure a ring that already fits you:
          Wrap a piece of paper or string around the base of your finger and
          mark the spot where it meets. Measure the distance between the marks
          in millimeters (mm) and use a ring size chart to find your
          corresponding size. **Ring Size Chart (Reference Only):**
        </p>

        <span className="mb-4 mt-8 block text-2xl font-medium leading-tight">
          Necklaces
        </span>
        <p>
          Necklace length can dramatically affect the look and feel of your
          outfit. Here's a guide to common necklace lengths:
        </p>

        <ul className="mt-4 flex flex-col gap-2">
          <li>
            Choker: 14-16 inches (35.5 - 40.6 cm) - Sits closely around the
            neck.
          </li>
          <li>
            Princess: 17-19 inches (43.2 - 48.3 cm) - Falls just below the
            collarbone.
          </li>
          <li>
            Matinee: 20-24 inches (50.8 - 61.0 cm) - Rests on the bust line.
          </li>
          <li>Opera: 26-28 inches (66.0 - 71.1 cm) - Reaches the sternum.</li>
          <li>
            Long: 30 inches or more (76.2 cm+) - Can fall to the waist or even
            hip.
          </li>
          <li>
            Consider your neck size and desired style when choosing a necklace
            length.
          </li>
        </ul>

        <span className="mb-4 mt-8 block text-2xl font-medium leading-tight">
          Earrings
        </span>
        <p>
          Earrings come in a variety of styles and sizes, so it's important to
          consider your personal preferences and facial features when choosing a
          pair. Here are some tips for measuring your ears for earrings:
        </p>

        <p className="mt-4">
          Earlobe length: Measure from the bottom of your earlobe to the
          piercing hole.
          <br />
          Earlobe width: Measure the widest part of your earlobe.
          <br />
          <br />
          Remember, these are just general guidelines. The best way to find the
          perfect earrings for you is to try on different styles and sizes to
          see what looks and feels best.
        </p>
      </div>
    </Modal>
  );
};

export default ModalSize;
