import { Title, Description, ShopImage, HomeImage } from "../styles.js";
const Home = () => {
  return (
    <div>
      <Title>PaintShop</Title>
      <Description>Not real paint... Just pixels</Description>
      <HomeImage
        id="home-image"
        alt="PaintPeanutButter"
        src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
      />
    </div>
  );
};

export default Home;
