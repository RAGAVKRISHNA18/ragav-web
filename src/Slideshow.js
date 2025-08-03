// Slideshow.js
import { useState, useEffect } from "react";

const imagePaths = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img4.jpeg",
  "/gallery/img5.jpeg"
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imagePaths.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div style={{    width: "290px",height: "auto" }}>
      <img
        src={imagePaths[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: "100%", height: "300px", objectFit: "fill", borderRadius: "2px" }}
      />
    </div>
  );
}
