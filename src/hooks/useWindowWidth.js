import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // State to store the window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to update the width state
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to only run on mount/unmount

  return width;
};

export default useWindowWidth;
