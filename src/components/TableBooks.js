import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { fetchAllBook } from '../services/UserServices';
import { useEffect, useState } from 'react';
import ModelAddNew from './ModelAddNew';
import ModelUpdateBook from './ModelUpdateBook';
import ModalDelete from './ModelDelete';
// import ReactPaginate from 'react-paginate';

const TableBooks = (props) => {
   const [listBooks, setListBooks] = useState([]);
   const [showAdd, setShowAdd] = useState(false);
   const [showUpdate, setShowUpdate] = useState(false);
   const [showDelete, setShowDelete] = useState(false);
   const [dataBookUpdate, setDataBookUpdate] = useState({});
   const [dataBookDelete, setDataBookDelete] = useState({});

   const handleClose = () => {
      setShowAdd(false);
      setShowUpdate(false);
      setShowDelete(false);
   };

   const handleShow = () => {
      setShowAdd(true);
   };

   useEffect(() => {
      getBooks();
   }, []);

   const getBooks = async () => {
      let res = await fetchAllBook();
      if (res) {
         setListBooks(res);
      }
   };

   const handleAddBook = (book) => {
      setListBooks([book, ...listBooks]);
   };

   const handleUpdate = (book) => {
      setDataBookUpdate(book);
      setShowUpdate(true);
   };

   const handleDelete = (book) => {
      setDataBookDelete(book);
      setShowDelete(true);
   };

   return (
      <>
         <Container>
            <div className="d-flex justify-content-between align-items-center">
               <h4 className="my-4">List Books:</h4>
               <button className="btn btn-primary " onClick={handleShow}>
                  Add new book
               </button>
            </div>
            <Table striped bordered hover className="mt-4">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Published Date</th>
                     <th>Genres</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {listBooks && listBooks.length > 0 ? (
                     listBooks.map((item, index) => {
                        return (
                           <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.publishedDate}</td>
                              <td>{item.genres}</td>
                              <td>
                                 <button
                                    className="btn btn-warning  me-3"
                                    onClick={() => handleUpdate(item)}
                                 >
                                    Update
                                 </button>
                                 <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item)}
                                 >
                                    Delete
                                 </button>
                              </td>
                           </tr>
                        );
                     })
                  ) : (
                     <tr>
                        <td colSpan={5} className="text-center">
                           Nothing
                        </td>
                     </tr>
                  )}
               </tbody>
            </Table>
            <ModelAddNew
               showAdd={showAdd}
               handleClose={handleClose}
               handleAddBook={handleAddBook}
            />
            <ModelUpdateBook
               showUpdate={showUpdate}
               handleClose={handleClose}
               dataBookUpdate={dataBookUpdate}
               getBooks={getBooks}
            />
            <ModalDelete
               showDelete={showDelete}
               handleClose={handleClose}
               dataBookDelete={dataBookDelete}
               getBooks={getBooks}
            />
            {/* <ReactPaginate
               nextLabel="next >"
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               marginPagesDisplayed={2}
               pageCount={4}
               previousLabel="< previous"
               pageClassName="page-item"
               pageLinkClassName="page-link"
               previousClassName="page-item"
               previousLinkClassName="page-link"
               nextClassName="page-item"
               nextLinkClassName="page-link"
               breakLabel="..."
               breakClassName="page-item"
               breakLinkClassName="page-link"
               containerClassName="pagination"
               activeClassName="active"
               renderOnZeroPageCount={null}
            /> */}
         </Container>
      </>
   );
};

export default TableBooks;
