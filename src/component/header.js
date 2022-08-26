import React from "react";
import Img1  from "./img/slider-minimal-slide-1-1920x888.jpg";
import Img2 from "./img/slider-minimal-slide-2-1920x888.jpg";
import Img3 from "./img/slider-minimal-slide-3-1920x888.jpg";


class Header extends React.Component{
    render(){
        return(
            <>
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="bg-dark" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="bg-dark" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Img1} class="d-block w-100 " style={{height:"85vh"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text-dark fw-bold">DEDICATEDBTO RESULTS</h1>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src={Img2} class="d-block w-100" style={{height:"85vh"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 class="text-dark fw-bold" >SOLUTION MADE EASY</h1>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Img3} class="d-block w-100" style={{height:"85vh"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h1 class="text-dark fw-bold" >THE BEST IN THE MARKET</h1>

      </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden border">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </>
        )
    }
}
export default Header