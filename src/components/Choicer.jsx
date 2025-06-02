import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const choices = [
  {
    category: "Guitar Body",
    options: [
      {
        category2: "Bumblebee",
        options2: ["Yellow", "Pink", "Gray", "Green", "Blue", "NavyBlue", "Red", "Black"],
      },
      {
        category2: "Honeybee",
        options2: ["Yellow", "Pink", "Gray", "Green", "Blue", "NavyBlue", "Red", "Black"],
      },
      {
        category2: "Hornet",
        options2: ["Yellow", "Pink", "Gray", "Green", "Blue", "NavyBlue", "Red", "Black"],
      },
      {
        category2: "Wasp",
        options2: ["Yellow", "Pink", "Gray", "Green", "Blue", "NavyBlue", "Red", "Black"],
      },
      
    ],
  },
  {
    category: "Guitar Neck",
    options: [
      { category2: "Tamburlanmış", options2: ["Dark", "Light"] },
      { category2: "Deve Kuşu", options2: ["Black", "White"] },
      { category2: "Timsah", options2: ["Black"] },
      { category2: "Stingray", options2: ["Black"] },
      { category2: "Piton", options2: ["White"] },
    ],
  },
  {
    category: "Pickguard",
    options: [
      { category2: "Tamburlanmış", options2: ["Black", "White"] },
      { category2: "Yansıtıcı", options2: ["Black", "White"] },
      { category2: "Deve Kuşu", options2: ["Black", "White"] },
      { category2: "Timsah", options2: ["Black"] },
      { category2: "Stingray", options2: ["Black"] },
      { category2: "Piton", options2: ["White"] },
      { category2: "Fleece", options2: ["Black", "Blue"] },
    ],
  },
  {
    category: "Buttons",
    options: [
      { category2: "Tamburlanmış", options2: ["Black", "Gray  "] },
      { category2: "Yansıtıcı", options2: ["Black", "White"] },
      { category2: "Deve Kuşu", options2: ["Black", "White"] },
      { category2: "Timsah", options2: ["Black"] },
      { category2: "Stingray", options2: ["Black"] },
      { category2: "Piton", options2: ["White"] },
      { category2: "Fleece", options2: ["Black", "Blue"] },
    ],
  },
];

const colors = [
  { color: "White", value: "FFFFFF" },
  { color: "Pink", value: "E281E7FF" },
  
  { color: "Black", value: "343434FF" },
  { color: "Blue", value: "3C6193" },
  { color: "NavyBlue", value: "06294F" },
  { color: "Red", value: "A60000FF" },
  { color: "Yellow", value: "E5B206FF" },
  { color: "Green", value: "4AB246FF" },
  { color: "Gray", value: "616161FF" },
  { color: "Dark", value: "343434FF" },
  { color: "Light", value: "F3EED1" },
];

export default function Choicer({onChange}) {
  const [category1Index, setCategory1Index] = useState(0);
  const [selected1, setSelected1] = useState(choices[0]);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = sağ, -1 = sol

  useEffect(() => {
    // İlk category2'yi seç ve renkleri güncelle
    const firstCategory2 = selected1.options[0];
    setSelectedCategory2(firstCategory2);
      
  }, [selected1]);

  const handleNextCategory = () => {
    setDirection(1);
    setCategory1Index((prevIndex) => {
      const newIndex = (prevIndex + 1) % choices.length;
      setSelected1(choices[newIndex]);
      return newIndex;
    });
  };

  const handlePrevCategory = () => {
    setDirection(-1);
    setCategory1Index((prevIndex) => {
      const newIndex = (prevIndex - 1 + choices.length) % choices.length;
      setSelected1(choices[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    if (selected1 && selectedColor) {
      onChange?.(selected1.category, selectedColor);
    }
  }, [selected1, selectedColor, onChange]);
  
  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg p-4 flex flex-col items-center">
      {/* Kategori Seçimi */}
      <div className="flex items-center gap-32 p-2 rounded-lg">
        <button onClick={handlePrevCategory} className="p-2">
          <ArrowLeft size={24} />
        </button>

        <motion.div
          key={selected1.category}
          initial={{ opacity: 0.5, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5, x: -direction * 50 }}
          transition={{ duration: 0.2 }}
          className="text-center min-w-[150px]"
        >
          <span className="text-lg font-normal">{selected1.category} </span>
          <br />
          <span className="text-lg font-normal text-gray-500">
            {category1Index + 1} / {choices.length}
          </span>
        </motion.div>

        <button onClick={handleNextCategory} className="p-2">
          <ArrowRight size={24} />
        </button>
      </div>

      {/* category2 Seçenekleri */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected1.category}
          initial={{ opacity: 0.25, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.25, x: -direction * 100 }}
          transition={{ duration: 0.1 }}
          className="mt-2 flex gap-5 overflow-x-auto p-2"
        >
          {selected1.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory2(option);
                setSelectedColor(option.options2[0]); // Seçilen category2'ye göre ilk rengi ayarla
              }}
              className={`px-4 w-32 h-9 border rounded-full text-medium font-semibold transition ${
                selectedCategory2?.category2 === option.category2
                  ? "border-gray-950 border-2"
                  : "border-gray-500"
              }`}
            >
              {option.category2}
            </button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Seçili category2'nin Renk Seçenekleri */}
      {selectedCategory2 && (
        <AnimatePresence mode="wait">
          <motion.div className="mt-2 flex gap-3 p-2">
            {selectedCategory2.options2.map((color, index) => {
              const colorObj = colors.find((c) => c.color === color);
              const bgColor = colorObj ? `#${colorObj.value}` : "gray";

              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedColor(color)} // Renk seçimi
                  className="flex flex-col items-center gap-2 px-4 py-2"
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`w-8 h-8 rounded-full border border-gray-300 ${
                      selectedColor === color
                        ? "outline outline-offset-4 outline-gray-200"
                        : ""
                    }`}
                    style={{ backgroundColor: bgColor, outlineWidth: "1.3px" }}
                    whileHover={{ scale: 1.1 }}
                  ></motion.div>

                  <div className="relative min-h-[16px] flex items-center">
                    {selectedColor === color ? <p className="text-xs">{color}</p> : <p className="invisible text-xs">{color}</p>}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
