import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Navbar/Cards/Cards";

interface FoodItem {
  imageUrl: string;
  name: string;
  price: number;
}

function App() {
  const [foodData, setFoodData] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      const response = await fetch("/Items.json"); 
      const data: FoodItem[] = await response.json();
      setFoodData(data);
    };

    fetchFoodData();
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {foodData.map((food, index) => (
          <Card
            key={index}
            imageUrl={food.imageUrl}
            name={food.name}
            price={food.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
