import { Link } from "react-router-dom";

const SideBar = () => {
  return(
    <aside>
      <ul>
        <li>
          <Link to={`/`}>Nic Cage Page</Link>
        </li>
        <li>
          <Link to={`/bottom/5`}>Scroll to Bottom</Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;