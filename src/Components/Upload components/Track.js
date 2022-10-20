import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "semantic-ui-react";

const Track = ({ page, setPage, formData, setFormData, x, setX }) => {
  return (
    <>
      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
        <div className="card">
          <div className="step-title">
            <header as="h3">TRACK MP3</header>
          </div>
          <Input
            focus
            type="file"
            className="form-group"
            placeholder="MP3 track"
            value={formData.Track}
            onChange={(e) =>
              setFormData({ ...formData,Track:e.target[0].files[0] })
            }
          />
          <Button color="green"  style={{ marginBottom: "5px" }}>UPLOAD</Button>
          <Button
            color="red"
           
            onClick={() => {
              setPage(page - 1);
              setX(-1000);
            }}
          >
            BACK
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Track;
