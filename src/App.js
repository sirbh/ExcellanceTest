import Layout from "./Components/LayoutComponent/Layout";
import { faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import AddButton from "./Components/UIComponent/Button/AddButton";
import BackDrop from "./Components/UIComponent/BackDrop/BackDrop";
import FormModal from "./Components/UIComponent/FormModal/FormModal";
import { hide, show } from "./Store/modal";
import { sort } from "./Store/tasks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Home from "./Components/Home/Home";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const showModal = useSelector((state) => state.modal.show);
  const location = useLocation();
  const isAuth = useSelector((state) => state.authenticate.isAuth);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [sortToggle, setSortToggle] = useState(true);
  const addProductHandler = () => {
    if (!isAuth) {
      window.alert("please LogIn first to add product !!!");
      return;
    }
    dispatch(show("add-task"));
  };

  const sortHandler = () => {
    dispatch(sort(sortToggle));
    setSortToggle((prev) => !prev);
  };

  return (
    <div className="App">
      {location.pathname === "/" && (
        <AddButton onClick={addProductHandler} top="75px" icon={faPlus}>
          Add Task
        </AddButton>
      )}
      {location.pathname === "/" && tasks.length !== 0 && (
        <AddButton onClick={sortHandler} top="140px" icon={faSort}>
          Sort
        </AddButton>
      )}
      {/* {products.length!==0&&<AddButton onClick = {sortQuantityHandler} top = "206px" icon = {faSort}>Sort Quantity</AddButton>} */}
      {showModal && (
        <BackDrop
          onClick={() => {
            dispatch(hide());
          }}
        >
          <FormModal></FormModal>
        </BackDrop>
      )}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/pagination">
            <Pagination></Pagination>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
