import { useState } from "react";
import Choicer from "./Choicer.jsx";
import Scene from "./Scene.jsx";

export default function CustomizerPage() {
  const [selectedCategory, setSelectedCategory] = useState(null); // örn. "Guitar Body"
  const [selectedColor, setSelectedColor] = useState(null); // örn. "Red"

  return (
    <div className="w-full h-screen">
      {/* 3D Model Alanı */}
      <Scene selectedCategory={selectedCategory} selectedColor={selectedColor} />

      {/* Alt bar Choicer */}
      <Choicer
        onChange={(category, color) => {
          setSelectedCategory(category);
          setSelectedColor(color);
        }}
      />
    </div>
  );
}
