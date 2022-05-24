import React, { useEffect, useState } from 'react'
import Table from './Table'
import { beerService } from './Api';
import Filters from './Filters';


const Home = () => {
    const [post, setPost] = useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [apiFilter, setApiFilter] = useState({
        beerName: "",
        yeast: "",
        date: "",
        abv: "",
        id: "",
        pageNo:33,
        noOfPost:10,
    })
   
    const filterHandle = (e) => {
        const {name,value}=e.target;
        setApiFilter({
            ...apiFilter,
            [name]:value
            
        });
    }
    useEffect(() => {
        (async () => {
            const response = await beerService(apiFilter,currentPage);
            setPost(response.data);
        })()
    }, [apiFilter,currentPage])
    return (
        <div className='mt-5'>
            <Filters
                filterHandle={filterHandle}
                apiFilter={apiFilter}
            />
            <Table
                post={post}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Home
