const NavButton = (props) => {
  const { content, handleClick } = props;

  return (<button onClick={handleClick}>{content}</button>
  );
}

export default NavButton;