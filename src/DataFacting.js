import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFacting = () => {
    const [pagenext, setnextpage] = useState(1)
    const [post, setpost] = useState([])

    const increasePage = () => {
        setnextpage(pagenext + 1)
    }
    const decreasePage = () => {
        if (pagenext > 1) {
            console.log(pagenext);
            setnextpage(pagenext - 1)
        }
    }
    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers?page=${pagenext}&per_page=5`)
            .then(res => {
                console.log(res);
                setpost(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [pagenext])
    return (
        <>
            <div className='container mb-5'>
                <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Tagline</th>
                            <th scope="col">First Brewed</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.name}</td>
                                    <td>{post.tagline}</td>
                                    <td>{post.first_brewed}</td>
                                    <td>{post.description}</td>
                                    <td><img src={post.image_url} alt="" width="30%" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='d-flex flex-row-reverse'>
                    <button onClick={increasePage} type="button" class="btn btn-primary me-5">Next Page</button>
                    <button onClick={decreasePage} type="button" class="btn btn-danger me-5">Previous</button>
                </div>
            </div>
        </>

    )
}

export default DataFacting
