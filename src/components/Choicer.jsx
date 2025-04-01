import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const choices = [
  {
    category: "Taban",
    options: [
      {
        category2: "Tamburlanmış",
        options2: ["Black", "White", "Blue", "Green", "Red", "Yellow"],
      },
      { category2: "Deve Kuşu", options2: ["Black", "White"] },
      { category2: "Timsah", options2: ["Black"] },
      { category2: "Stingray", options2: ["Black"] },
      { category2: "Piton", options2: ["White"] },
      { category2: "Fleece", options2: ["Black", "Blue"] },
    ],
  },
  {
    category: "Yüzey",
    options: [
      { category2: "Tamburlanmış", options2: ["Black", "White"] },
      { category2: "Deve Kuşu", options2: ["Black", "White"] },
      { category2: "Timsah", options2: ["Black"] },
      { category2: "Stingray", options2: ["Black"] },
      { category2: "Piton", options2: ["White"] },
    ],
  },
  {
    category: "Swoosh/Arka Uç",
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
];

const colors = [
  { color: "White", value: "FFFFFF" },
  { color: "Black", value: "000000" },
  { color: "Blue", value: "0085CA" },
  { color: "Red", value: "E83F25" },
  { color: "Yellow", value: "FFB22C" },
  { color: "Green", value: "3F7D58" },
];

export default function Choicer() {
  const [category1Index, setCategory1Index] = useState(0);
  const [selected1, setSelected1] = useState(choices[0]);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = sağ, -1 = sol

  

  useEffect(() => {
    const firstCategory2 = selected1.options[0];
    setSelectedCategory2(firstCategory2);
    setSelectedColor(firstCategory2.options2[0]);
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
          className="mt-2 flex gap-4 overflow-x-auto p-2"
        >
          {selected1.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory2(option);
                setSelectedColor(option.options2[0]);
              }}
              className={`px-4 w-40 h-9 border rounded-full text-medium font-semibold transition ${
                selectedCategory2 === option
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
    <motion.div
 
      className="mt-2 flex gap-3 p-2"
    >
      {selectedCategory2.options2.map((color, index) => {
        const colorObj = colors.find((c) => c.color === color);
        const bgColor = colorObj ? `#${colorObj.value}` : "gray";

        return (
          <motion.button
            key={index}
            onClick={() => setSelectedColor(color)}
            className="flex flex-col items-center gap-2 px-4 py-2"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-8 h-8 rounded-full border border-gray-300 ${
                selectedColor === color ? "outline outline-offset-4 outline-gray-200" : ""
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
