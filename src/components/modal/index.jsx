import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

const ModalComponent = ({
  isOpen,
  onSave,
  onClose,
  title,
  content,
  okText = "Ok",
  cancelText = "Cancel",
  hideFooter = false,
  disableEscapeKeyDown = true,
  sx = {},
  className = "",
}) => {
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      fullWidth
      maxWidth="sm"
      disableEscapeKeyDown={disableEscapeKeyDown}
      sx={{ borderRadius: 2, ...sx }}
      className={className}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 1, 
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: (theme) => theme.palette.grey[600] }} 
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ py: 2 }}>{content}</Box>
      </DialogContent>
      {!hideFooter && (
        <>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button
              variant="outlined"
              onClick={onClose}
              color="error" 
              sx={{
                minWidth: 120,

                textTransform: "none",
                fontWeight: "bold",
                borderColor: (theme) => theme.palette.error.main, 
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.error.main, 
                  color: "white", 
                  borderColor: (theme) => theme.palette.error.dark, 
                },
              }}
            >
              {cancelText}
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                onClose();
                onSave();
              }}
              color="primary" 
              sx={{
                minWidth: 120,
                textTransform: "none",
                fontWeight: "bold",
                boxShadow: (theme) => theme.shadows[3],
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  boxShadow: (theme) => theme.shadows[4],
                },
              }}
            >
              {okText}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ModalComponent;
