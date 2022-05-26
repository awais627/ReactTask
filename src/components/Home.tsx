import React, { FC, useEffect, ChangeEvent, useState } from "react";
import Table from "./Table";
import {getBeersService, IFilters, IPostdata}  from "./Api";
import Filters from "./Filters";

const initialFilters = {
  beerName: "",
  yeast: "",
  date: "",
  abv: 0,
  id: "",
  endPage: "33",
  postPerPage: "10",
}

const Home: FC = () => {
  const [post, setPost] = useState<IPostdata[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  useEffect(() => {
    (async () => {
      const data = await getBeersService(filters, currentPage);
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
