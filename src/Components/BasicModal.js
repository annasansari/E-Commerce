import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MediaControlCard from './MediaContrilCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #8bc34a',
    boxShadow: 24,
    borderRadius: '10px',
};

export default function BasicModal({ detail, handleClose, open }) {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <MediaControlCard detail={detail} />
                </Box>
            </Modal>
        </div>
    );
}