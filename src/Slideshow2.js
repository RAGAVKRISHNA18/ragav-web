// Slideshow.js
import { useState, useEffect } from "react";

const imagePaths = [
  "/projects/bookbuddy.svg",
  "/projects/bus.svg",
  "/projects/college-web.svg",
  "/projects/ebook.svg",
  "/projects/game.svg",
  "/projects/spotify.svg",
  "/projects/wage.svg",
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
    <div style={{    width: "100%",height: "auto" }}>
      <img
        src={imagePaths[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: "100%", height: "300px", objectFit: "contain", borderRadius: "15px", margin: 0, padding: 0 }}
      />
    </div>
  );
}
