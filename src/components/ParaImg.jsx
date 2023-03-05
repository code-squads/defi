import { Container } from "@mui/system";
import Image from "next/Image";
import React from "react";
import joinImg from "../assets/undraw_join_re_w1lh.svg"

const ParaImg = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-16">
        <div>
          <div className="w-[50%]">
            <Container>
              <div>
                <div
                  className="text-[3.5rem]"
                  style={{ color: "white" }}
                >
                  {" "}
                  Meet DeFi{" "}
                </div>
                <p
                  className="mt-[40px] text-[1.4rem]"
                  style={{ color: "rgb(108, 120, 147)" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequuntur quod odit, nulla soluta deserunt commodi nobis, quidem sed distinctio deleniti ut eligendi veniam quaerat vitae! Voluptatem laboriosam eaque nobis!                    
                </p>
              </div>
              <div>
                <Container
                  className="bg-slate-300 m-10 p-5 rounded-xl"
                  style={{
                    maxWidth: "90%",
                    backgroundColor: "#1b1e29",
                    // borderRadius: "20px",
                    color: "#c7cad9",
                  }}
                >
                  <div>
                    <Image src={joinImg} alt="join" className="w-[300px] h-[300px]" />
                  </div>                  
                </Container>
                  <hr style={{ background: "#C77DFF", height: "0.05px" , margin: '1rem' }} />

              </div>
            </Container>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default ParaImg;
