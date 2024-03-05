import { useRef } from 'react';

// Custom hook that provides a function to scroll to a specific element
function useWindowScroll() {
  const elemRefs = useRef({});

  // Function to scroll to specified element or component
  const scrollToRef = (key) => {
    if (elemRefs.current[key]) {
      elemRefs.current[key].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  };

  // Return the elemRefs and the scrollToRef function
  return [elemRefs, scrollToRef];
}

export default useWindowScroll;