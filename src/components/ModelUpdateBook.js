import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { putUpdateBook } from '../services/UserServices';
import { toast } from 'react-toastify';

const ModelUpdateBook = (props) => {
   const { showUpdate, handleClose, dataBookUpdate, getBooks } = props;
   const [name, setName] = useState('');
   const [publishedDate, setPublishedDate] = useState('');
   const [genres, setGenres] = useState('');

   const handleUpdateBook = async () => {
      await putUpdateBook(dataBookUpdate._id, name, publishedDate, genres);

      toast.success('Updated successfully');
      handleClose();
      getBooks();
   };

   useEffect(() => {
      if (showUpdate) {
         setName(dataBookUpdate.name);
         setPublishedDate(dataBookUpdate.publishedDate);
         setGenres(dataBookUpdate.genres);
      }
   }, [dataBookUpdate]);

   return (
      <>
         <Modal show={showUpdate} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Update book</Modal.Title>
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
               <Button variant="primary" onClick={() => handleUpdateBook()}>
                  Update
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default ModelUpdateBook;
