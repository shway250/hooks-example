import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavButton from './NavButton';
import Article from './Article';
import useWindowScroll from '../hooks/useWindowScroll';
import { articleImgs } from '../constants/Constants';

const buttonArr = new Array(articleImgs.length).fill("Button");

function NicCageArticles() {
  // Call the custom hook to get articleRefs and scrollArticle function
  const [articleRefs, scrollArticle] = useWindowScroll();
  let { bottomIndex } = useParams();

  useEffect(() => {
    if(bottomIndex) {
      scrollArticle(bottomIndex);
    }
  }, [bottomIndex]);

  return (
    <div className='article-container'>
      <nav>
        {buttonArr.map((item, i) => {
          return(
            <NavButton 
              key={`button${i}`}
              content={`${item} Index:${i}`}
              handleClick={() => scrollArticle(i)}
            />
          )
        })}
      </nav>
      {/* Passing a callback into the ref attribute to create a list of current
          refs. That way scrollArticle() only needs an argument that equals
          the index of the article we want to scroll to.
      */}
      {articleImgs.map((item, i) => {
          return (
            <Article
              key={`article${i}`}
              src={item}
              ref={el => articleRefs.current[i] = el}
            />
          )
      })}
    </div>
  );
}

export default NicCageArticles;

