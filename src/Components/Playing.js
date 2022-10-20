import React, { useEffect } from "react";
import "./player.css";
import {
  Image,
  Segment,
  Grid,
  Button,
  Header,
  Icon,
  Label,
} from "semantic-ui-react";
import photo1 from "../Asserts/photo1.jpg";
import { atom, useRecoilState } from "recoil";

const activeTrackUrl = atom({
  key: "activeUrl",
  default:{
    url:"",
    downloadUrl:""
  },
});

const Playing = () => {
  const [{url,downloadUrl}, setTrackInfo] = useRecoilState(activeTrackUrl);

  //  useEffect(() => {

  //      axios
  //       .get(`http://localhost:4000/api/songs/get-tracks`)
  //       .then((response) => {
  //         setSongsArray(response.data.details.rows);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  // })

  return (
    <>
      <div>
        <Segment id="player">
          <Grid columns={2}>
            <Grid.Column>
              <Label color="orange" floated="left">
                NOW PLAYING
              </Label>
              <br />
              <br />
              <Header as="h1" floated="left">
                Playing
              </Header>
              <br />
              <br />
              <br />
              <Header as="h2" floated="left">
                {url} (----)
              </Header>
              <br />
              <br />
              <audio
                controls
                style={{ float: "left" }}
                controlsList="nodownload noplaybackrate"
              >
                <source src={downloadUrl} />
              </audio>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  float: "right",
                }}
              >
                <Image src={photo1} alt="photo1" width="200px" />
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
        <Header as="h2" id="player-details" floated="left">
          {url}- <span>statistics</span>
        </Header>
        <br />
        <br />
        <div>
          <Icon
            name="download"
            size="big"
            style={{ marginLeft: "-13em" }}
          ></Icon>
          0<Icon name="share" size="big"></Icon>0
        </div>

        <br />
        <br />
        <Button
          color="orange"
          compact
          size="tiny"
          floated="left"
          id="player-details"
        >
          PLAY
        </Button>
        <br />
        <br />
        <Button
          color="orange"
          compact
          size="tiny"
          floated="left"
          id="player-details"
          download="https://firebasestorage.googleapis.com/v0/b/excepcion-library-61baa.appspot.com/o/Excepcion-Music-Tracks%2FluckyOnes.mp3?alt=media&token=b6dee47f-a3c3-4d3c-b119-ad4b1a357a77"
        >
          DOWNLOAD NOW
        </Button>
      </div>
    </>
  );
};

export default Playing;
