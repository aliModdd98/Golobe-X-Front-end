
import Footer from '../components/Footer/Footer'

import PhotosContainer from '../components/PhotosContainer/PhotosContainer'
// =======
import PlanPerfectTrip from '../components/PlanPerfectTrip/PlanPerfectTrip'
import Reviews from '../components/Reviews/Reviews'

// import PhotosContainer from '../components/PhotosContainer/PhotosContainer'

// import DestinationPhotosContainer from '../components/DestinationPhotosContainer/DestinationPhotosContainer'

import Header from '../components/Header/Header'


function LandingPage() {


  return (
    <>
{/* // <<<<<<< HEAD */}
{/* //       <PhotosContainer />
//       <Footer />
// ======= */}
      <Header />
     
      <PlanPerfectTrip />
      <PhotosContainer />
      <Reviews />

      {/* // <FallIntoTravel /> */}
      <Footer />


    </>
  )
}

export default LandingPage