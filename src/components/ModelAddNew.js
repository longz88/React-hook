import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postAddBook } from '../services/UserServices';
import { toast } from 'react-toastify';

const ModelAddNew = (props) => {
   const { showAdd, handleClose, handleAddBook } = props;
   const [name, setName] = useState('');
   const [publishedDate, setPublishedDate] = useState('');
   const [genres, setGenres] = useState('');

   const handleSaveBook = async () => {
      const res = await postAddBook(name, publishedDate, genres);
      if (res && res._id) {
         handleClose();
         setName('');
         setPublishedDate('');
         setGenres('');
         toast.success('Added successfully !!!!');
         handleAddBook(res);
      }
   };

   return (
      <>
         <Modal show={showAdd} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Add new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form>
                  <div className="mb-3">
                     <label className="form-label">Name</label>
                     <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                     />
                  </div>

                  <div className="mb-3">
                     <label className="form-label">Published Date</label>
                     <input
                        type="text"
                        className="form-control"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                     />
                  </div>

                  <div className="mb-3">
                     <label className="form-label">Genres</label>
                     <input
                        type="text"
                        className="form-control"
                        value={genres}
                        onChange={(e) => setGenres(e.target.value)}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleSaveBook()}>
                  Add
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default ModelAddNew;
