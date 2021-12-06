import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,
    //  MDBCardText,
      MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Ads = () => {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' 
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Ads Placement here</MDBCardTitle>
            {/* <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText> */}
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Ads are available</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://media.istockphoto.com/photos/light-bulb-puzzle-pieces-forming-the-word-brand-on-blue-background-picture-id1272969812?b=1&k=20&m=1272969812&s=170667a&w=0&h=Jzv8_iSw8FlAI93SKOq3YCai4K3xEn5zw8HFj5RfvzA='
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Advertize with Us</MDBCardTitle>
            {/* <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText> */}
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Come on board</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://images.unsplash.com/file-1635990775102-c9800842e1cdimage'
            alt='...'
            position='top'
            height= '350px'
          />
          <MDBCardBody>
            <MDBCardTitle>Sell your Brand</MDBCardTitle>
            {/* <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText> */}
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Sponsors allowed here</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}


export default Ads;