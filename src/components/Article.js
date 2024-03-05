import { forwardRef } from "react";

const Article = forwardRef((props, ref) => {
  const { src, alt, content, title } = props;

  return(
    <div className="articles" ref={ref}>
      <img
        src={src}
        alt={alt}
      />
      <h3>{title}</h3>
      <article>{content}</article>
    </div>
  );
});

export default Article;