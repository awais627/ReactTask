import React, { useEffect, useState } from "react";
import Table from "./Table";
import { getBeersService } from "./Api";
import Filters from "./Filters";
const Home = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    beerName: "",
    yeast: "",
    date: "",
    abv: "",
    id: "",
    endPage: 33,
    postPerPage: 10,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  useEffect(() => {
    (async () => {
      const { data } = await getBeersService(filters, currentPage);
      setPost(data);
    })();
  }, [filters, currentPage]);
  return (
    <div className="mt-5">
      <Filters handleChange={handleChange} />
      <Table
        post={post}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default Home;
