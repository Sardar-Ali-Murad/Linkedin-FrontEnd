import React from "react";
import User from "../assets/murad.jpg";
import { HiPhoto } from "react-icons/hi2";
import { RxVideo } from "react-icons/rx";
import { BsCalendar4Event } from "react-icons/bs";
import { TbArticle } from "react-icons/tb";
import "./UploadPost.css";
import Dialog from "@mui/material/Dialog";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UploadPost = () => {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleOpen() {
    setOpen(true);
  }

  function handlePhoto() {
    setOpen(true);
    setPhoto(true);
  }

  function handleVedio() {
    setOpen(true);
    setPhoto(false);
  }

  return (
    <div className="UserInfoCard">
      <div className="writePost">
        <img src={User} />
        <input placeholder="Start A Post" className="UserInfoCardTextField" />
      </div>
      <div className="uploadWrappers">
        <div className="uploadWrappersSingle">
          <HiPhoto className="uploadWrapperImage photo" onClick={handlePhoto} />
          <p>Photo</p>
        </div>
        <div className="uploadWrappersSingle">
          <RxVideo className="uploadWrapperImage video" onClick={handleVedio} />
          <p>Video</p>
        </div>
        <div className="uploadWrappersSingle">
          <BsCalendar4Event className="uploadWrapperImage event" />
          <p>Event</p>
        </div>
        <div className="uploadWrappersSingle articleWrapper">
          <TbArticle className="uploadWrapperImage article" />
          <p>Write Article</p>
        </div>
      </div>

      {/* The Dialog Box */}
      {photo ? (
        <div style={{ width: "300px" }}>
          <Dialog
            style={{ width: "100%" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <DialogTitle id="alert-dialog-title">
                {" Edit your photo "}
              </DialogTitle>
              <AiOutlineClose
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="dialogLine"></div>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select images to share
              </DialogContentText>
            </DialogContent>
            <DialogTitle
              id="alert-dialog-title"
              style={{ visibility: "hidden" }}
            >
              {
                " Let Google help apps determine location. This means sending anonymous  location data to Google, even when no apps are running. "
              }
            </DialogTitle>
            <div className="dialogLine"></div>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} autoFocus>
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        // TheVider
        <div style={{ width: "300px" }}>
          <Dialog
            style={{ width: "100%" }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <DialogTitle id="alert-dialog-title">
                {" Select/Edit your video"}
              </DialogTitle>
              <AiOutlineClose
                style={{
                  fontSize: "30px",
                  marginTop: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="dialogLine"></div>

            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select video to share
              </DialogContentText>
            </DialogContent>
            <DialogTitle
              id="alert-dialog-title"
              style={{ visibility: "hidden" }}
            >
              {
                " Let Google help apps determine location. This means sending anonymous  location data to Google, even when no apps are running. "
              }
            </DialogTitle>
            <div className="dialogLine"></div>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} autoFocus>
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default UploadPost;
