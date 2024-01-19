import { useEffect, useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("No products found,come back soon");
      }
      console.log(response);
      const products = await response.json();
      setProducts(products);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
    setIsLoading(false);
  };

  if (error) {
    return <NotFound fetchData={fetchData} />;
  } else {
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <h1 className="text-4xl font-bold font-mono text-center mt-3 md:text-6xl ">
              Mini-Store
            </h1>
            <section className="grid p-4 gap-5 md:grid-cols-3 lg:grid-cols-4 md:px-8">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </section>
          </div>
        )}
      </>
    );
  }
}

export default App;
