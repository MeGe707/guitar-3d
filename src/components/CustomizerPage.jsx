// CustomizerPage.jsx

import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Choicer from "./Choicer.jsx";
import Scene from "./Scene.jsx";
import { Link } from "react-router-dom";

export default function CustomizerPage() {
  // 1) Choicer’dan gelecek seçim bilgileri
  const [selectedCategory, setSelectedCategory] = useState("Guitar Body");
  const [selectedModel, setSelectedModel] = useState("Bumblebee");
  const [selectedColor, setSelectedColor] = useState("Yellow");

  const navigate = useNavigate();

  // 2) lastColors’u parent’ta tutuyoruz (component mount/remount olsa da silinmez)
  const [lastColors, setLastColors] = useState({
    "Guitar Body": "#00050a",
    "Guitar Neck": "#F0EBCD",
    "Pickguard": "#00050a",
    "Buttons": "#00050a",
  });

  // 3) Renklerin hex eşlemelerini içeren sabit bir obje
  const colorMap = {
    "GuitarBodyWhite": "#FFFFFF",
    "GuitarBodyPink": "#E281E7",
    "GuitarBodyBlue": "#3C6193",
    "GuitarBodyBlack": "#343434",
    "GuitarBodyNavyBlue": "#06294F",
    "GuitarBodyRed": "#A60000",
    "GuitarBodyYellow": "#E5B206",
    "GuitarBodyGreen": "#4AB246",
    "GuitarBodyGray": "#616161",
    "PickguardWhite": "#FCFCFC",
    "PickguardBlack": "#0A0A0A",
    "ButtonsBlack": "#0A0A0A",
    "ButtonsGray": "#4A4A4A",
    "GuitarNeckDark": "#464335",
    "GuitarNeckLight": "#634E39",
  };

  // 4) Bir kategori ve renk verildiğinde lastColors’u güncelleyen fonksiyon
  const updateColorForCategory = (category, color) => {
    if (!category || !color) return;
    const safeCategory = category.replace(/\s+/g, "");
    const fullKey = `${safeCategory}${color}`;
    if (colorMap[fullKey]) {
      setLastColors((prev) => ({
        ...prev,
        [category]: colorMap[fullKey],
      }));
    }
  };

  // 5) Choicer’dan gelen onChange: hem seçimleri hem de lastColors’u günceller
  const handleChoicerChange = (category, model, color) => {
    setSelectedCategory(category);
    setSelectedModel(model);
    setSelectedColor(color);
    updateColorForCategory(category, color);
  };

  // 6) Choicer’ın açık/kapalı durumu
  const [isChoicerOpen, setIsChoicerOpen] = useState(true);

  // 7) Choicer’ın iki farklı yüksekliğini sabit belirtiyoruz (px cinsinden)
  const HEADER_HEIGHT = 48;        // Sadece toggle header kadar yükseklik
  const FULL_CHOICER_HEIGHT = 240; // Choicer tamamen açıkken aldığı yükseklik

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/*
        8) Scene kapsayıcısı:
           - position: absolute; top: 0; left: 0; right: 0;
           - bottom: isChoicerOpen ? FULL_CHOICER_HEIGHT : HEADER_HEIGHT
           Bu sayede Scene, Choicer’ın bulunduğu alanın altındaki kısmı kaplamaz.
      */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          bottom: isChoicerOpen ? FULL_CHOICER_HEIGHT : HEADER_HEIGHT,
        }}
      >
        <Scene
          selectedModel={selectedModel}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          lastColors={lastColors} />
      </div>
      
      <button type="reload" onClick={() => navigate('/product')} className=" absolute px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg 
    hover:bg-blue-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-400 
    transition
    cursor-pointer
  " 
  style={{
    bottom: isChoicerOpen
      ? FULL_CHOICER_HEIGHT + 78   // Choicer açıkken 240px + 12px boşluk
      : HEADER_HEIGHT + 46,       // Choicer kapalıyken 48px + 12px boşluk
    right: 24                     // Sağdan 24px boşluk
  }}
>
  Done
</button>


      <Choicer
        isOpen={isChoicerOpen}
        onToggle={() => setIsChoicerOpen((prev) => !prev)}
        onChange={handleChoicerChange}
      />
    </div>
  );
}
