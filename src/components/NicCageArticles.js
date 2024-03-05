import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import NavButton from './NavButton';
import Article from './Article';
import useWindowScroll from '../hooks/useWindowScroll';
import { articleImgs } from '../constants/Constants';

const buttonArr = new Array(articleImgs.length).fill("Button");

function MyComponent() {
  const [index, setIndex] = useState(-1);
  // Call the custom hook to get articleRef and scrollArticle function
  const [articleRef, scrollArticle] = useWindowScroll();

  function handleClick(index) {
    // using flushSync to ensure state is set synchronously before scrollArticle
    // function from the useWindowScroll() hook executes.
    flushSync(() => {
      setIndex(index);
    });
    scrollArticle();
  }

  return (
    <div>
      {buttonArr.map((item, i) => {
        return(
          <NavButton 
            key={`button${i}`}
            content={`${item} Index:${i}`}
            handleClick={() => handleClick(i)}
          />
        )
      })}
      {/* checking the index stored in state against the index of the iterated
          articles in order to proper assign "current" value to correct
          component.
      */}
      {articleImgs.map((item, i) => {
        if(index === i) {
          return (
            <Article
              key={`article${i}`}
              src={item}
              ref={articleRef}
            />
          )
        } else {
          return (
            <Article
              key={`article${i}`}
              src={item}
            />
          )
        }
      })}
    </div>
  );
}

export default MyComponent;

