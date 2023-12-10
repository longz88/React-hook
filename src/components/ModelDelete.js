import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteBook } from '../services/UserServices';

const ModalDelete = (props) => {
   const { showDelete, handleClose, dataBookDelete, getBooks } = props;

   const handleDelete = async () => {
      await deleteBook(dataBookDelete._id);
      toast.success('Delete Book Success');
      handleClose();
      getBooks();
   };

   return (
      <>
         <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Delete book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Are you sure delete {dataBookDelete.name}?????
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleDelete()}>
                  Delete
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default ModalDelete;
