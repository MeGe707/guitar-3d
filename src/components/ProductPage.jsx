import { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
    "https://cdn.do-re.com.tr/gibson-custom-1959-les-paul-standard-reissue-murphy-lab-elektro-gitar-light-aged-dirty-lemon-40d3e877333dc9c881be84ee0c3743d1-91ab41e8fa4ced5305ed8ae343df7c94-max-pp.jpg",
    "https://cdn.do-re.com.tr/gibson-custom-1959-les-paul-standard-reissue-murphy-lab-elektro-gitar-light-aged-dirty-lemon-40d3e877333dc9c881be84ee0c3743d1-e3c1a69a58f3cc3549e13a4372626574-max-pp.jpg",
    "https://cdn.do-re.com.tr/gibson-custom-1959-les-paul-standard-reissue-murphy-lab-elektro-gitar-light-aged-dirty-lemon-40d3e877333dc9c881be84ee0c3743d1-9f0a65f875a540519a7cb0a024463d62-max-pp.jpg   ",
    "https://cdn.do-re.com.tr/gibson-custom-1959-les-paul-standard-reissue-murphy-lab-elektro-gitar-light-aged-dirty-lemon-40d3e877333dc9c881be84ee0c3743d1-fa47a6c8120861798445446942100031-max-pp.jpg",
];

const sizes = ["XXXX", "YYYY", "ZZZZ", "AAAA", "BBBB"];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const navigate = useNavigate()

  const handleOrder = () => {
    if (selectedSize) {
      setOrderSuccess(true);
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
  };

  const handleCustomize = () => {
    navigate("/customizer-page")
  }

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto gap-6">
      {/* Left - Image Gallery */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 relative">
        <img
          src={images[mainImageIndex]}
          alt="Product"
          className="rounded-2xl shadow-lg object-cover"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg"
        >
          &gt;
        </button>
        <div className="flex gap-2 overflow-x-auto mt-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-xl cursor-pointer border-2 hover:border-black"
              onClick={() => setMainImageIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Right - Product Details */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div>
          <h1 className="text-3xl font-bold">Lorem ipsum Guitar</h1>
          <p className="text-gray-500">Product Code: DQ8426-146</p>
        </div>

       

        {/* Size Selector */}
        <div>
          <h2 className="text-lg mb-2">Select Model</h2>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size, idx) => (
              <button
                key={idx}
                className={`border p-2 rounded-lg ${
                  selectedSize === size ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Order Button */}
        <button
          disabled={!selectedSize}
          onClick={handleOrder}
          className="bg-black text-white p-4 rounded-xl text-lg hover:opacity-90 disabled:opacity-50"
        >
          Order One
        </button>

        <button
          disabled={!selectedSize}
          onClick={handleCustomize}
          className="bg-black text-white p-4 rounded-xl text-lg hover:opacity-90 disabled:opacity-50"
        >
          Customize Your Guitar
        </button>

        {/* Success Message */}
        {orderSuccess && (
          <div className="p-4 bg-green-100 text-green-700 rounded-xl">
            Your order has been successfully placed! 🎉
          </div>
        )}

        {/* Product Description */}
        <div className="text-gray-700">
          <h3 className="font-semibold mb-1">Product Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia veritatis cupiditate autem possimus temporibus.
          </p>
        </div>

       
      </div>
    </div>
  );
}
