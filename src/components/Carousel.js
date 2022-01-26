import RBCarousel from "react-bootstrap-carousel";


export const Carousel = () => {
    return (
        <div className="container">
        <div className="row mt-2">
          <div className="col">
            <RBCarousel
              autoplay={true}
              pauseOnVisibility={true}
              slidesshowSpeed={5000}
              version={4}
              // indicators={false}
            >
            

            </RBCarousel>
          </div>
        </div>
        </div>
        )
}