//Modal
import Modal from "react-modal";

const ProductModal = (props) => {
  //Things
  return (
    <Modal
      isOpen={props.isAddModalOpen}
      onRequestClose={props.closeAddModal}
      contentLabel="Example Modal"
    >
      Hello
    </Modal>
  );
};

export default ProductModal;
