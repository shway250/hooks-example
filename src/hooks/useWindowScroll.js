import { useRef } from 'react';

// Custom hook that provides a function to scroll to a specific element
function useWindowScroll() {
  const elemRef = useRef(null);

  // Function to focus the input element
  const scrollToRef = () => {
    if (elemRef.current) {
      elemRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  };

  // Return the elemRef and the scrollToRef function
  return [elemRef, scrollToRef];
}

export default useWindowScroll;