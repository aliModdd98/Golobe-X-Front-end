import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddingCard.css'
import { AiOutlineDown } from 'react-icons/ai'


const AddingCard = () => {
  return (
    <>
    <Container >
        <div className='BigCard '>
        <svg className='close' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z" fill="black"/>
        </svg>
        <h2>Add a new Card</h2>
    <Form>
      <div className=''>
    <Form.Group className=" mb-3 position-relative border border-dark rounded-2 px-2 py-3 " controlId="formGridAddress2">
      <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Card Number</Form.Label>
      <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='4321 4321 4321 4321' />
      <svg className='img' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <g clip-path="url(#clip0_965_3362)">
      <path d="M0.96 4.70587C0.429912 4.70587 0 5.13566 0 5.66587V18.8179C0 19.3481 0.430128 19.7779 0.96 19.7779H23.04C23.5701 19.7779 24 19.3481 24 18.8179V5.66587C24 5.13569 23.5699 4.70587 23.04 4.70587H0.96ZM14.334 9.19762C14.9181 9.19762 15.3862 9.32664 15.6847 9.44662L15.4807 10.7299L15.3457 10.6616C15.0677 10.5416 14.7105 10.4262 14.2177 10.4344C13.6279 10.4344 13.3553 10.6975 13.3553 10.9436C13.3518 11.221 13.6739 11.4039 14.2005 11.6779C15.0697 12.1005 15.4714 12.613 15.4658 13.2866C15.4541 14.5158 14.426 15.3101 12.8423 15.3101C12.1666 15.3027 11.5156 15.1596 11.1637 14.9944L11.3753 13.6684L11.5695 13.7629C12.0643 13.984 12.3847 14.0734 12.9877 14.0734C13.4208 14.0734 13.8856 13.8921 13.8893 13.4951C13.8921 13.2359 13.695 13.0511 13.1085 12.7609C12.537 12.4776 11.7794 12.003 11.7878 11.1521C11.7967 10.0011 12.8453 9.19762 14.334 9.19762ZM2.12249 9.38587H4.55474C4.88227 9.39826 5.1467 9.50371 5.238 9.85913L5.76226 12.5651C5.76233 12.5654 5.76216 12.5664 5.76226 12.5666L5.91974 13.3774L7.39649 9.38587H8.994L6.61949 15.2284L5.02349 15.2299L3.753 10.5154C4.50895 10.9158 5.15254 11.3792 5.52526 12.0169C5.42916 11.8151 5.30254 11.5873 5.14051 11.3629C4.95182 11.1015 4.54433 10.764 4.374 10.6204C3.78048 10.12 2.97444 9.71594 2.10374 9.50213L2.12249 9.38587ZM9.62926 9.39262H11.1915L10.2142 15.2261H8.652L9.62926 9.39262ZM18.453 9.39262H19.6365L20.8755 15.2261H19.455C19.455 15.2261 19.3141 14.556 19.2683 14.3516C19.045 14.3516 17.4834 14.3494 17.3077 14.3494C17.2483 14.5073 16.9853 15.2261 16.9853 15.2261H15.378L17.6513 9.87713C17.8122 9.49702 18.0865 9.39262 18.453 9.39262ZM18.5693 10.9616C18.4924 11.1786 18.3585 11.529 18.3675 11.5136C18.3675 11.5136 17.8866 12.7962 17.7608 13.1291L19.0245 13.1284C18.9071 12.5721 18.7896 12.0159 18.672 11.4597L18.5693 10.9617V10.9616Z" fill="#1434CB"/>
      </g>
      <defs>
    <clipPath id="clip0_965_3362">
      <rect width="24" height="24" fill="white" transform="translate(0 0.241882)"/>
    </clipPath>
    </defs>
    </svg>
    </Form.Group>
    </div>
    
    <Row className="ha-box  container   mb-3">
      <Form.Group className=' mb-3 position-relative border border-dark rounded-2 px-2 py-3' as={Col} controlId="formGridEmail">
        <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Exp.Date</Form.Label>
        <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='02/27' />
      </Form.Group>

      <Form.Group className='mb-3 position-relative border border-dark rounded-2 px-2 py-3' as={Col} controlId="formGridPassword">
        <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>CVC</Form.Label>
        <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='123' />
      </Form.Group>
    </Row>

    <Form.Group className=" mb-3 position-relative border border-dark rounded-2 px-2 py-3 " controlId="formGridAddress2">
      <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Name on Card</Form.Label>
      <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='John Doe' />
      </Form.Group>
    <Form.Group className=" mb-3 position-relative border border-dark rounded-2 px-2 py-3 " controlId="formGridAddress2">
      <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Country or Region</Form.Label>
      <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='United States' />
      </Form.Group>
                    <p className='mb-0 d-flex justify-content-between opacity-75 position-relative '>
                       
                        <AiOutlineDown className='fs-4' />
                    </p>
                    
                   
      <svg className='check mt-3 ' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <path d="M17.0922 8.98936L17.0924 8.9891C17.2208 8.83164 17.2821 8.62997 17.2631 8.42767C17.244 8.22538 17.1461 8.03871 16.9905 7.90801C16.8349 7.77732 16.6341 7.7131 16.4316 7.72924C16.229 7.74538 16.041 7.84058 15.9081 7.99427L15.9078 7.99452L10.1788 14.8134L8.07419 12.4751C8.07412 12.475 8.07406 12.475 8.074 12.4749C8.00688 12.3968 7.92483 12.3329 7.83268 12.2869C7.74044 12.2409 7.63993 12.2138 7.53707 12.2072C7.4342 12.2005 7.33105 12.2146 7.23367 12.2484C7.1363 12.2822 7.04667 12.3351 6.97004 12.4041C6.89342 12.473 6.83136 12.5566 6.78749 12.6499C6.74363 12.7432 6.71886 12.8443 6.71463 12.9473C6.7104 13.0503 6.72681 13.1531 6.76288 13.2496C6.79891 13.3461 6.85386 13.4344 6.92449 13.5094C6.92455 13.5095 6.92461 13.5095 6.92467 13.5096L9.62429 16.5092C9.69679 16.5898 9.78542 16.6542 9.88444 16.6984C9.98346 16.7425 10.0906 16.7653 10.1991 16.7654L10.2117 16.7654L10.2121 16.7654C10.3229 16.7636 10.4321 16.7381 10.5321 16.6904C10.6322 16.6428 10.7209 16.5742 10.7922 16.4894L17.0922 8.98936ZM3.14621 3.38816C3.70424 2.83012 4.46085 2.51624 5.25003 2.51538L18.75 2.51538C19.5392 2.51624 20.2958 2.83012 20.8538 3.38816C21.4118 3.94619 21.7257 4.70279 21.7266 5.49194V18.9919C21.7257 19.7811 21.4118 20.5377 20.8538 21.0957C20.2958 21.6538 19.5392 21.9676 18.75 21.9685H5.25003C4.46085 21.9676 3.70424 21.6538 3.14621 21.0957C2.58818 20.5377 2.2743 19.7811 2.27344 18.9919L2.27344 5.49196C2.2743 4.70278 2.58818 3.94618 3.14621 3.38816Z" fill="black" stroke="#112211" stroke-width="0.046875"/>
      </svg>
      <span className='text position-absolute m-2 mt-3' >Securely save my information for 1-click checkout</span>


    <Button className='btn mt-5'  type="submit">
    Add Card
    </Button>
    <p className='para'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
  </Form>
  </div>
  </Container>

  </>

  )
}

export default AddingCard