import React from 'react'

const ApiRender = ({post, ReactPaginate, pageNo, handlePageClick}) => {
    return (
        <>
            <div className='container mb-5'>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Tagline</th>
                            <th scope="col">First Brewed</th>
                            <th scope="col">Description</th>
                            <th scope='col'>Abv</th>
                            <th scope='col'>Yeast</th>
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
                                    <td>{post.abv}</td>
                                    <td>{post.ingredients.yeast}</td>
                                    <td><img src={post.image_url} alt="" width="30%" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageNo}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={0}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}

                />
            </div>
        </>
    )
}

export default ApiRender
