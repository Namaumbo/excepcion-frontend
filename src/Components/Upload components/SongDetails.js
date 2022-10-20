import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "semantic-ui-react";
const SongDetails = ({ page, setPage, formData, setFormData, x, setX }) => {
  return (
    <>
      <motion.div
        initial={{ x: x }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="card">
          <div className="step-title">Song Details</div>
          <Input
            focus
            type="text"
            placeholder="Title"
            className="form-group"
            value={formData.title} //setting the value of the form to the props value
            onChange={
              (e) => setFormData({ ...formData, title: e.target.value }) //setting the formData to the value input of the textfield
            }
          />
          <Input
            focus
            type="text"
            className="form-group"
            placeholder="Album"
            value={formData.album}
            onChange={(e) =>
              setFormData({ ...formData, album: e.target.value })
            }
          />
          <Input
            focus
            type="text"
            className="form-group"
            placeholder="year of release"
            value={formData.year}
            onChange={(e) =>
              setFormData({ ...formData, year: e.target.value })
            }
          />
           <Input
            focus
            type="text"
            className="form-group"
            placeholder="Artist"
            value={formData.artist}
            onChange={(e) =>
              setFormData({ ...formData, artist: e.target.value })
            }
          />
          <Button
            color="green"
            onClick={() => {
              setPage(page + 1);
              setX(1000);
            }}
          >
            Next
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default SongDetails;
