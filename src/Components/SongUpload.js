import SongDetails from "./Upload components/SongDetails";
import TrackInfo from "./Upload components/TrackInfo";
import { useState,React  } from "react";
import "../App.css";
import Track from "./Upload components/Track";

const SongUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    album: "",
    year: "",
    nickname: "",
    artist:""

  });
  const [x, setX] = useState(0);

  const [page, setPage] = useState(0);
  const componentList = [
    <SongDetails
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <TrackInfo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
      x={x}
      setX={setX}
    />,
    <Track
    page={page}
    setPage={setPage}
    formData={formData}
    setFormData={setFormData}
    x={x}
    setX={setX}
    
    />
  ];
  return (
    <>
      <div className="adminContainer">
        <div className="progress-bar">
          <div
            style={{ width: page === 0 ? "0%" : page === 1 ? "50%" : page === 2 ? "100%" : "0%" }}
          ></div>
        </div>
        <div>{componentList[page]}</div>
      </div>
    </>
  );
};
export default SongUpload;
