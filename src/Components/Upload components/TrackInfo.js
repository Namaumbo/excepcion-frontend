import React from "react";
import { motion } from "framer-motion";
import { Button, Input } from "semantic-ui-react";

const TrackInfo = ({ page, setPage, formData, setFormData, x, setX }) => {
  return (
    <>
      <motion.div
        initial={{ x: x }}
        transition={{ duration: 1 }}
        animate={{ x: 0 }}
      >
        <div className="card">
          <div className="step-title">TRACK ARTWORK</div>
          <Input
            focus
            type="file"
            className="form-group"
            placeholder="Art work"
            value={formData.artwork}
            onChange={(e) =>
              setFormData({ ...formData, artwork: e.target[0].files[0] })
            }
          />
          <Button color="green"  style={{marginBottom:"5px"}}  onClick={() => {
              setPage(page + 1);
              setX(1000);
            }}>NEXT</Button>
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

export default TrackInfo;
