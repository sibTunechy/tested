import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="primary"
        className="text-white text-center text-lg-left"
      >
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              {/* <h5 className='text-uppercase'>Links</h5> */}

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black">
                    List of Programs
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    More videos
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
