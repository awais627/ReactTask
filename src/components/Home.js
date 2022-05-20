import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Table from './Table'
import { axiosGet } from './Api';
import Filters from './Filters';


const Home = () => {
    const [beerName, setbeerName] = useState("")
    const [yeast, setYeast] = useState("");
    const [date, setDate] = useState("");
    const [abv, setAbv] = useState("");
    const [id, setId] = useState("");
    const [pageNo, setpageNo] = useState(33)
    const [noOfPost, setNoOfPost] = useState(10)
    const [pageNext, setNextPage] = useState(1)
    const [post, setpost] = useState([])

    const handleChange = (e) => {
        setNoOfPost(e.target.value);
        let val = Math.ceil(325 / e.target.value);
        console.log(val);
        if (val >= 0 && val !== Infinity) {
            setpageNo(val);
        }

    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handlePageClick = (data) => {
        setNextPage(data.selected + 1)
    }
    const handleAbvChnage = (e) => {
        setAbv(e.target.value)
    }
    const handleIdChange = (e) => {
        setId(e.target.value)
    }
    const handleBeerNameChange = (e) => {
        setbeerName(e.target.value)
    }
    const handleYeastChange = (e) => {
        setYeast(e.target.value)
    }

    useEffect(() => {
        (async () => {
            const data = await axiosGet(pageNext, noOfPost, date, abv, id, beerName,yeast);
            setpost(data);
        })()
    }, [noOfPost, pageNext, date, abv, id, beerName, yeast])
    return (
        <div className='mt-5'>
            <Filters
                beerName={beerName}
                abv={abv}
                date={date}
                id={id}
                yeast={yeast}
                noOfPos={noOfPost}
                handleYeastChange={handleYeastChange}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                handleIdChange={handleIdChange}
                handleAbvChnage={handleAbvChnage}
                handleBeerNameChange={handleBeerNameChange}
            />
            <Table
                post={post}
                ReactPaginate={ReactPaginate}
                pageNo={pageNo}
                handlePageClick={handlePageClick}
            />
        </div>

    )
}

export default Home
