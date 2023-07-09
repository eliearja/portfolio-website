import { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const containerRef = useRef(null);
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setContainerVisible(entry.isIntersecting);
    });

    const currentRef = containerRef.current; // Store the reference in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef]); // Add containerRef to the dependency array

  return (
    <div className="Home" id="home">
      <div
        className={`Container ${containerVisible ? "Show" : ""}`}
        ref={containerRef}
      >
        <h1 className="Name">Elie Arja</h1>
        <p className="Description">This is my website.</p>
        <p className="Description">
          Built using HTML, CSS, JS with ReactJS as the framework.
        </p>
        <p className="Description">No libraries, no nonsense.</p>
      </div>
    </div>
  );
}

export default Home;
