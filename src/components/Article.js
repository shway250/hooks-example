import { useState, useEffect, forwardRef } from "react";

const Article = forwardRef((props, ref) => {
  const { src } = props;
  const [text, setText] = useState('');

  // grabbing some hipster ipsum for the article text
   useEffect(() => {
    fetch("http://hipsum.co/api/?type=hipster-centric&paras=7")
      .then(res => res.json())
      .then(item => setText(item[0]));
  }, []);

  return(
    <div>
      <img
        src={src}
        ref={ref}
        alt="Nic Cage"
      />
      <article>{ text }</article>
    </div>
  );
});

export default Article;