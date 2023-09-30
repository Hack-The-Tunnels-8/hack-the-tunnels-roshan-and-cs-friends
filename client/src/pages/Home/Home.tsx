import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page, ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";
import { TypeAnimation } from 'react-type-animation';

function Home() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProducts();
      setProducts(json.data.products);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="home-page">
        <div>
        <h1 className="home-page__title">You're <span><TypeAnimation 
        sequence={[
          'Broke?',
          1000,
          `or not broke?`,
          1000
        ]}
        wrapper='span'
        speed={50}
        style={{fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        /></span></h1>
        <br></br>
</div>
<br></br>
        <div className="home-page__products">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={`${product.id}`}>
              <ProductPreviewCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                key={`${product.id}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}

export default Home;
