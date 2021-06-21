import { DeleteButtonStyled } from "../../styles.js";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
    props.setProduct(null);
  };

  return (
    <DeleteButtonStyled onClick={() => handleDelete()}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
