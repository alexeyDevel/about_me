import { Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Photo1 from "./photo1.jpeg";
import data from "./text.json";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export default function MainPage() {
  return (
    <div className="main-page">
      <section className="main">
        <Container maxW="container.xl">
          <div className="wrapper">
            <div className="text">
              <p>
                {"<"}
                <span className="teg-text">html</span>
                {">"}
              </p>
              <br />
              <p>
                {"<"}
                <span className="teg-text">
                  Моя история на пути к программированию
                </span>
                {">"}
              </p>
              <br />
              <p>
                {"<"}
                <span className="teg-text">p</span>
                {">"}
                {data.text1}
                <br />
                <br />
                {data.text1}
                {"<"}
                <span className="teg-text">p</span>
                {">"}
              </p>
            </div>
            <div className="image-wrapper">
              <img src={Photo1} alt="" />
            </div>
          </div>
        </Container>
      </section>
      <section className="video">
        <Container maxW="container.xl">
          <div className="wrapper">
            <div className="video-wrapper">
              <VideoPlayer
                videoUrl={
                  "https://drive.google.com/uc?id=14JDFKRmtxMUNFd5ZIIrrU2RfrE_3jTEI&export=download"
                }
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
