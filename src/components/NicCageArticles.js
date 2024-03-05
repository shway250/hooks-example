import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavButton from './NavButton';
import Article from './Article';
import useWindowScroll from '../hooks/useWindowScroll';
import { articleImgs } from '../constants/Constants';

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
        {articleImgs.map((item, i) => {
          return(
            <NavButton 
              key={`button${i}`}
              content={item.title}
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
              src={item.src}
              alt={item.alt}
              title={item.title}
              content={item.content}
              ref={el => articleRefs.current[i] = el}
            />
          )
      })}
    </div>
  );
}

export default NicCageArticles;

