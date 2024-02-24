"use client"

import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery
} from '@mui/material';

export default function InitialModal() {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery('(max-width: 425px)');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle 
            id="alert-dialog-title"
            sx={{ textAlign: "center" }}
        >
          {"Customize your server"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText 
            id="alert-dialog-description"
            sx={{ textAlign: "center" }}
          >
            Give your server a personality with a name and an image. You can always change it later.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose}
            variant="contained"
            fullWidth={matches ? true : false }
            sx={{ m: "8px" }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}