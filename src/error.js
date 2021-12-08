import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle,
    //  MDBCardText,
     MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Error = () => {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      
      
      <MDBCol>
        <MDBCard className='h-100'>
          
          <MDBCardBody>
            <MDBCardTitle>Error Page</MDBCardTitle>
            {/* <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText> */}
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}


export default Error;