  import { useState } from "react";
  import { useNavigate } from "react-router-dom";


  import waspback from './../assets/images/Wasp/waspback.jpg';
  import waspfront from './../assets/images/Wasp/waspfront.jpg';
  import waspside from './../assets/images/Wasp/waspside.jpg';
  import waspperspective from './../assets/images/Wasp/waspperspective.jpg';
  import honeybeeback from './../assets/images/Honeybee/honeybeeback.jpg';
  import honeybeefront from './../assets/images/Honeybee/honeybeefront.jpg';
  import honeybeeside from './../assets/images/Honeybee/honeybeeside.jpg';
  import honeybeeperspective from './../assets/images/Honeybee/honeybeeperspective.jpg';
  import hornetback from './../assets/images/Hornet/hornetback.jpg';
  import hornetfront from './../assets/images/Hornet/hornetfront.jpg';
  import hornetside from './../assets/images/Hornet/hornetside.jpg';
  import hornetperspective from './../assets/images/Hornet/hornetperspective.jpg';
  import bumblebeeback from './../assets/images/Bumblebee/bumblebeeback.jpg';
  import bumblebeefront from './../assets/images/Bumblebee/bumblebeefront.jpg';
  import bumblebeeside from './../assets/images/Bumblebee/bumblebeeside.jpg';
  import bumblebeeperspective from './../assets/images/Bumblebee/bumblebeeperspective.jpg';
import Bumblebee from "../meshes/Bumblebee.jsx";
import Honeybee from "../meshes/Honeybee.jsx";
import Wasp from "../meshes/Wasp.jsx";

  const images = {

      Bumblebee: [
        bumblebeefront,
        bumblebeeback,
        bumblebeeside,
        bumblebeeperspective,
      ],

      Honeybee: [
        honeybeefront,
        honeybeeback,
        honeybeeside,
        honeybeeperspective,
      ],

      Wasp: [
        waspfront,
        waspback,
        waspside,
        waspperspective,
      ],

      Hornet: [
        hornetfront,
        hornetback,
        hornetside,
        hornetperspective,
      ]
    
    };

  
    const textes = {
      Bumblebee: "Classic silhouette. Modern performance. \n \n The Bumblebee is built for those who love vintage-inspired looks but demand modern comfort and clarity. Its single-cut carbon fiber body delivers exceptional sustain and punch, while the dual humbuckers provide warmth for chords and bite for solos. The rounded neck profile ensures familiar feel, making this model ideal for blues, rock, or pop players who want a guitar that looks and feels timeless—with an edge. \n \n Body: Carbon fiber composite \n Neck: Set maple neck \n Pickups: Dual humbuckers \n Bridge: Tune-o-matic \n Finish: Gloss yellow with black hardware",
      Honeybee: `Effortlessly playable. Light in weight, heavy in tone. \n \n With its smooth double-cutaway shape and contoured carbon fiber body, Honeybee offers a lightweight feel ideal for long sessions—on stage or at home. Engineered from recycled carbon fiber and epoxy composite, it delivers crisp highs and tight low-end response. The bolt-on maple neck provides fast playability, while the simplified tone control layout keeps everything intuitive. Perfect for rhythm players and lead guitarists seeking a reliable everyday companion. \n \n Body: Carbon fiber composite \n Neck: CNC-machined maple, bolt-on \nPickups: Dual passive single coils \nScale: 25.5" \n Finish: Satin black & yellow`,
      Wasp: "Aggressive shape. Balanced response. \n \n Wasp is designed for the bold. Its V-shaped design is more than aesthetic—it's built for stability, weight balance, and power. Thanks to its rigid carbon construction and powerful humbuckers, it cuts through any mix with articulation and punch. The Wasp is ideal for modern rock and metal players who want both precision and stage presence in one refined package. \n \n Body: Carbon fiber composite\n Neck: Neck-through maple construction\n Pickups: High-output dual humbuckers \n Controls: 3-way toggle, volume/tone\n Finish: Matte black with yellow inlays",
      Hornet: "Uncompromising tone meets angular design. \n \n With sharp lines and a distinctive offset shape, Hornet blends ergonomic comfort with visual attitude. The light yet resonant carbon body gives the player full control without fatigue. Hornet’s active pickups and fast-action neck make it a versatile choice for advanced players seeking clarity at high volumes and speed across the fretboard. It’s built to stand out and to perform.\n \n Body: Carbon fiber composite\n Neck: Set neck, reinforced truss system \n Pickups: Active dual humbuckers \n Hardware: Blacked-out tuning and bridge system \n Finish: Solid yellow with gloss coating",
    }

    const productCodes =  {
      Bumblebee: "DQ8426-146",
      Honeybee: "DQ8426-147",
      Wasp: "DQ8426-148",
      Hornet: "DQ8426-149",
  }

    const prices = {
      Bumblebee: 550,
      Honeybee: 550,
      Wasp: 700,
      Hornet: 700,
    }

   
  const sizes = ["Bumblebee", "Honeybee", "Wasp", "Hornet"];

  export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState("Bumblebee");
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

    const imgs = images[selectedSize] || [];
    const text = textes[selectedSize] 
    const productCode = productCodes[selectedSize];

    const handlePrevImage = () => {
      setMainImageIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
      setMainImageIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <div className="flex flex-col md:flex-row p-4 max-w-7xl mx-auto gap-6">
        {/* Left - Image Gallery */}
        <div className="flex flex-col gap-4 w-full h-full md:w-1/2 relative">
          <img
            src={imgs[mainImageIndex]}
            alt="Product"
            className="rounded-2xl h-96 shadow-lg object-cover"
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
            {imgs.map((img, idx) => (
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
            <h1 className="text-3xl font-bold">{selectedSize} Guitar</h1>
            <p className="text-gray-500">Product Code: {productCode}</p>
          </div>

          <div className="text-2xl font-semibold text-gray-800">
            {prices[selectedSize]}€
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
          <div className="text-gray-700" style={{whiteSpace: "pre-line"}}>
            <h3 className="font-semibold mb-1">Product Description</h3>
            <p>
              {text}
            </p>
          </div>

        
        </div>
      </div>
    );
  }
