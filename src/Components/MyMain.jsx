import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import MySection from "./MySection";

const MyMain = (props) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetchArtist();

  }, []);

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist}`
      );
      if (response.ok) {
        const data = await response.json();
        setArtist(data);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        {artist &&
          artist.data.slice(0, 4).map((album) => {
            return <MySection album={album} key={album.id} />;
          })}
      </Row>
    </Container>
  );
};
export default MyMain
