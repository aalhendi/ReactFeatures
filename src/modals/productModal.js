//Modal
import Modal from "react-modal";
//State & Store
import { useState } from "react";

const ProductModal = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: [e.target.value] });
    console.log(product);
  };

  return (
    <Modal
      isOpen={props.isAddModalOpen}
      onRequestClose={props.closeAddModal}
      contentLabel="Example Modal"
    >
      <form>
        <div className="mb-3">
          <label>Cookie Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Your Favorite Cookie"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="20"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Description</label>
          <input
            className="form-control"
            type="text"
            placeholder="A Short Description"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Image</label>
          <input
            className="form-control"
            type="text"
            placeholder="url"
            name="image"
            onChange={handleChange}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ProductModal;
