import React, { Dispatch, FC } from "react";
import { IPostdata } from "./Api";
import "./Table.css";

interface ITableProps {
  currentPage: number;
  post: IPostdata[];
  setCurrentPage:Dispatch<React.SetStateAction<number>>
};

const tableHead = [
  "ID",
  "Name",
  "Tagline",
  "First Brewed",
  "Description",
  "Abv",
  "Yeast",
  "Image",
];

const Table: FC<ITableProps> = ({ currentPage, post, setCurrentPage }) => {
  return (
    <>
      <div className="container mb-5">
        <table className="table">
          <thead>
            <tr>
              {tableHead.map((item, index) => (
                <th key={`tableHead${index}`} scope="col">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {post.map(
              ({
                id,
                name,
                tagline,
                first_brewed,
                description,
                ingredients,
                image_url,
                abv,
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{tagline}</td>
                  <td>{first_brewed}</td>
                  <td>{description}</td>
                  <td>{abv}</td>
                  <td>{ingredients.yeast}</td>
                  <td>
                    <img src={image_url} alt="beer bottle" width="30%" />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-primary"
          >
            Previous
          </button>
          <span className="currentPage">{currentPage}</span>
          <button
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn btn-success"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default Table;
