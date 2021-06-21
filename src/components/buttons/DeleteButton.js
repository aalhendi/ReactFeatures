import { DeleteButtonStyled } from "../../styles.js";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.productId);
  };

  return (
    <DeleteButtonStyled onClick={() => handleDelete()}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
