import { useEffect, useState } from "react";
import Paginate from "react-paginate";
import cssClasses from "./Pagination.module.scss";
import axios from "axios";
import Detail from "../Pagination/Detail/Detail";

const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get("https://reqres.in/api/users?", {
        params: {
          page: currentPage + 1,
        },
      })
      .then((resp) => {
        setLoading(false);
        setData(resp.data.data);
        setTotalPage(resp.data.total_pages);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div className={cssClasses.Main}>
      <div className={cssClasses.Header}>
        {loading && <p>Laoding...</p>}
        {error && <p>Something Went Wrong</p>}
        {!loading &&
          !error &&
          data.length !== 0 &&
          data.map((ele) => (
            <Detail
              key={ele.id}
              firstName={ele.first_name}
              lastName={ele.last_name}
              email={ele.email}
              avatar={ele.avatar}
            ></Detail>
          ))}
      </div>
      <div className={cssClasses.Footer}>
        <Paginate
          pageCount={totalPage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          initialPage={0}
          onPageChange={(page) => {
            console.log(page);
            setCurrentPage(page.selected);
          }}
          onPageActive={(page) => {
            console.log("active " + { ...page });
          }}
          containerClassName={cssClasses.Container}
          pageClassName={cssClasses.Page}
          activeClassName={cssClasses.PageActive}
          nextClassName={cssClasses.Next}
          previousClassName={cssClasses.Previous}
          disabledClassName={cssClasses.Disabled}
        ></Paginate>
      </div>
    </div>
  );
};

export default Pagination;
