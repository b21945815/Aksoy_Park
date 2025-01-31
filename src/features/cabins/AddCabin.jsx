import Button from "../../ui/Button";
import AddCabinForm from "./AddCabinForm";
import Modal from "../../ui/Modal";
export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <AddCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
