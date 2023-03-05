import { Container } from "@mui/system";
import React from "react";

const ParaImg = () => {
  return (
    <div>
      <div className="m-16 flex justify-center align-middle">
        <div className="flex">
          <div className="w-[50%]">
            <Container>
              <div>
                <div className="text-[4rem] ml-10" style={{ color: "white"}}>
                  {" "}
                  Meet DeFi{" "}
                </div>
                <p
                  className="text-[1.4rem]"
                  style={{ color: "rgb(108, 120, 147)" , marginLeft: '2rem' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  consequuntur quod odit, nulla soluta deserunt commodi nobis,
                  quidem sed distinctio deleniti ut eligendi veniam quaerat
                  vitae! Voluptatem laboriosam eaque nobis!
                </p>
              </div>
              <div>
                <Container
                  className="bg-slate-300 m-10 mt-[7rem] p-5 rounded-xl"
                  style={{
                    maxWidth: "80%",
                    backgroundColor: "#1b1e29",
                    // borderRadius: "20px",
                    color: "#c7cad9",
                  }}
                >
                  <div className=" flex justify-center align-middle">
                    <img
                      src='/assets/undraw_join_re_w1lh.svg'
                      alt="join"
                      className="w-[300px] h-[300px]"   
                    />
                  </div>
                </Container>
                <hr
                  style={{
                    background: "#C77DFF",
                    height: "0.05px",
                    margin: "1rem",
                  }}
                />
                <div className="text-[2.2rem] font-medium" style={{color: 'white' , marginLeft: '2rem' }}>Competitive Returns</div>
                <p
                  className="text-[1.4rem]"
                  style={{ color: "rgb(108, 120, 147)" , marginLeft: '2rem' }}
                >
                  Take advantage of some of the highest and most consistent
                  returns in DeFi on a growing range of assets
                </p>
              </div>
            </Container>
          </div>
          <div className="w-[50%]">
            <Container>
              <Container
                className="bg-slate-300 m-10 p-5 rounded-xl"
                style={{
                  maxWidth: "80%",
                  backgroundColor: "#1b1e29",
                  // borderRadius: "20px",
                  color: "#c7cad9",
                }}
              >
                <div className=" flex justify-center align-middle">
                  <img
                    src='/assets/undraw_sharing_knowledge_03vp.svg'
                    alt="join"
                    className="w-[300px] h-[300px]"
                  />
                </div>
              </Container>
              <hr
                style={{
                  background: "#C77DFF",
                  height: "0.05px",
                  margin: "1rem",
                }}
              />
              <div>
                <div className="text-[2.2rem] font-medium" style={{color: 'white' , marginLeft: '2rem' }}>Competitive Returns</div>
                <p
                  className="text-[1.4rem]"
                  style={{ color: "rgb(108, 120, 147)" , marginLeft: '2rem' }}
                >
                  Take advantage of some of the highest and most consistent
                  returns in DeFi on a growing range of assets
                </p>
              </div>
              <div>
                <Container
                  className="bg-slate-300 m-10 mt-[10rem] p-5 rounded-xl"
                  style={{
                    maxWidth: "80%",
                    backgroundColor: "#1b1e29",
                    // borderRadius: "20px",
                    color: "#c7cad9",
                  }}
                >
                  <div className=" flex justify-center align-middle">
                    <img
                      src='/assets/undraw_warning_re_eoyh.svg'
                      alt="join"
                      className="w-[300px] h-[300px]"
                    />
                  </div>
                </Container>
                <hr
                  style={{
                    height: "0.05px",
                    margin: "1rem",
                  }}
                />
                <div>
                  <div className="text-[2.2rem] font-medium" style={{color: 'white' , marginLeft: '2rem' }}>
                    Competitive Returns
                  </div>
                  <p
                    className="text-[1.4rem]"
                    style={{ color: "rgb(108, 120, 147)" , marginLeft: '2rem' }}
                  >
                    Take advantage of some of the highest and most consistent
                    returns in DeFi on a growing range of assets
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaImg;
