import React from "react";
import man1 from "../assets/men1.avif";
import man2 from "../assets/men2.jpg";
import man3 from "../assets/men3.jpg";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./UserSuggestions.css";
import Card from '@mui/material/Card';

const Feed = () => {
  return (
    <div>
        {/*  */}
      {/*  */}
      <div className="suggestionImg">
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
      </div>
      {/*  */}
      {/*  */}
      <div className="userSuggestionsMain">
        <h2>People also viewed</h2>
        <div className="singleFeed">
          <img src={man1} className="feedImg" />
          <div className="feedText">
            <h5>John Doe</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="singleFeed">
          <img src={man2} className="feedImg" />
          <div className="feedText">
            <h5>Stippend</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="singleFeed">
          <img src={man3} className="feedImg" />
          <div className="feedText">
            <h5>Michell</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="userSuggestionsMain">
        <h2>People you may know</h2>
        <div className="singleFeed">
          <img src={man1} className="feedImg" />
          <div className="feedText">
            <h5>John Doe</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="singleFeed">
          <img src={man2} className="feedImg" />
          <div className="feedText">
            <h5>Stippend</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>

        <div className="singleFeed">
          <img src={man3} className="feedImg" />
          <div className="feedText">
            <h5>Michell</h5>
            <h5 className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              style={{
                width: "90px",
                marginLeft: "20px",
                borderRadius: "10px",
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}
    </div>
  );
};

export default Feed;
