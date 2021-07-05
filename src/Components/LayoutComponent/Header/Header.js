import { faAddressBook, faPager, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../../Store/modal";
import { filterTasks } from "../../../Store/tasks";
import { logout } from "../../../Store/auth";
import { NavLink, useHistory } from "react-router-dom";
import cssClasses from "./Header.module.scss";
import { useState } from "react";
const Header = () => {
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const userName = useSelector((state) => state.authenticate.userName);
  const history = useHistory();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const NavOption = isAuth ? (
    <>
      <NavLink
        to="#"
        className={cssClasses.Icon}
        activeStyle={{ color: "black" }}
      >
        <FontAwesomeIcon
          icon={faUser}
          style={{ marginRight: "10px" }}
        ></FontAwesomeIcon>
        {userName}
      </NavLink>
      <NavLink
        to="/"
        className={cssClasses.Icon}
        onClick={() => {
          dispatch(logout());
          window.alert("you have logged out!!");
        }}
      >
        <FontAwesomeIcon
          icon={faAddressBook}
          style={{ marginRight: "10px" }}
        ></FontAwesomeIcon>
        LogOut
      </NavLink>
    </>
  ) : (
    <NavLink
      to="/"
      className={cssClasses.Icon}
      onClick={() => {
        dispatch(show("login"));
      }}
    >
      <FontAwesomeIcon
        icon={faAddressBook}
        style={{ marginRight: "10px" }}
      ></FontAwesomeIcon>
      Login
    </NavLink>
  );

  return (
    <div className={cssClasses.Header}>
      <div className={cssClasses.Holder}>
        <h1>ExcellanceGroup</h1>
      </div>
      <div className={cssClasses.SearchBar}>
        <input
          placeholder="Search Task"
          value={query}
          onClick = {()=>{history.push('/')}}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch(filterTasks(e.target.value));
          }}
        ></input>
      </div>
      <div className={cssClasses.Nav}>
        {NavOption}
        <NavLink
        to="/pagination"
        className={cssClasses.Icon}
        activeStyle = {{color:'black'}}
      >
        <FontAwesomeIcon
          icon={faPager}
          style={{ marginRight: "10px" }}
        ></FontAwesomeIcon>
        Page
      </NavLink>
        </div>
    </div>
  );
};

export default Header;
