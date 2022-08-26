import React from "react";
import { BsFillFlagFill , BsFillFileTextFill , BsReception4 , BsCameraReelsFill , BsMegaphoneFill , BsShareFill , BsXDiamondFill , BsFillCollectionFill} from "react-icons/bs";
import Img4 from "./img/large-features-2-570x368.jpg"
import Img5 from "./img/team-1-370x368.jpg"
import Img6 from "./img/team-2-370x368.jpg"
import Img7 from "./img/team-3-370x368.jpg"






class Main extends React.Component {
  render() {
    return (
      <>
        <div class="container  d-flex justify-content-center align-items-center flex-column pt-5">
          <h1>Our Services</h1>
          <p class="w-75 text-center pb-5">
            We provide a variety of marketing and promotion services to enable
            you and your business with innovative tools and strategies and
            attract more customers.
          </p>
          <div class="container">
            <div class="row">
              <div class="col-sm-3 border-0 d-flex justify-content-start align-items-start flex-column p-2">
                <BsFillFlagFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Branding</h3>
                <p class="text-secondary pt-2">Whether you’re looking to launch a brand or you just need help clarifying your message, we can help you.</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsReception4 class="h1" style={{color:"#1ab785"}}/>
                <h3>Strategy</h3>
                <p class="text-secondary pt-2">Our experts can help you develop your marketing strategy and integrate it into your advertising campaign.</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsCameraReelsFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Video Production</h3>
                <p class="text-secondary pt-2">Need a professional advertising video for your campaign? We can offer anything you need.</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsFillFileTextFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Copywriting</h3>
                <p class="text-secondary pt-2">Our experienced copywriters will gladly provide you with high-quality texts for your websites or advertisements.</p>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-sm-3 borde-0  d-flex justify-content-start align-items-start flex-column p-2">
                <BsShareFill class="h1" style={{color:"#1ab785"}}/>
                <h3>SMM</h3>
                <p class="text-secondary pt-2">We can develop a simple social media marketing plan designed specifically for your business and your needs.</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsXDiamondFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Outdoor Advertising</h3>
                <p class="text-secondary pt-2">If you need to create your next out-of-home campaign or lease your space, we can satisfy your advertising needs.​</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsFillCollectionFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Graphic Design</h3>
                <p class="text-secondary pt-2">Our graphic design services include printing brochures, banners and logos for your advertising campaign.</p>
              </div>
              <div class="col-sm-3  borde-0 p-2">
              <BsMegaphoneFill class="h1" style={{color:"#1ab785"}}/>
                <h3>Marketing</h3>
                <p class="text-secondary pt-2">This service includes a variety of promotional techniques and methods that can boost your company’s products.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-container bg-secondary d-flex justify-content-center align-items-center pt-5 pb-5">
        <div class="row container d-flex justify-content-center align-items-center">
        <div class="col-sm-6 ">
            <h1 class="pb-3 text-light">A Few Words About Us</h1>
            <p class=" text-light">We are a team of talented marketers who happen to love creating smart ideas for those who will have us. We use our creative potential to provide the smartest ideas.</p>
            <p class=" text-light">We have a wide range of experience, expertise and tools to create and implement your campaigns, from carefully curating awesome content to optimising it with our great SEO powers as well as outdoor marketing skills.</p>
            <button type="button" class="btn btn-lg text-light pt-2  mt-2" style={{backgroundColor:"#1ab785"}}>Learn More</button>
        </div>
        <div class="col-sm-6">
            <img  src={Img4} />
        </div>
        </div>
        </div>

        <div class="hero-container d-flex justify-content-center align-items-center pt-5 pb-4" style={{backgroundColor:"#0d7856"}}>
            <h4  style={{color:"white",marginRight:"2%"}}>Learn the Cost of your <span class="fw-bold"> Marketing Campaign</span> Right Now!</h4>
            <button type="button" class="btn btn-lg text-light pt-2  mt-2" style={{backgroundColor:"#1ab785"}}>VIEW ALL PRICING</button>

        </div>
        <div class="container d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
        <h1 class="pb-5">Who We Are</h1>
        <div class="container">
        <div class="row g-5">
            <div class="col-sm-4">
                <img src={Img5}/>
            </div>
            <div class="col-sm-4">
            <img src={Img6}/>
            </div>
            <div class="col-sm-4">
            <img src={Img7}/>
            </div>
        </div>
        </div>
        <button type="button" class="btn btn-lg text-light pt-2  mt-5" style={{backgroundColor:"#1ab785"}}>VIEW ALL TEAM</button>
        </div>
        
        <div class="hero-container bg-secondary d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
            <h1 class=" pb-4" style={{color:"white"}}>Testimonials</h1>
       <div class="container  ">
       <div class="row  d-flex justify-content-center align-items-center">
        <div class="col-sm-6 ">
            <h1 class=" text-light">"</h1>
            <p class=" text-light">Profilab is, hands down, one of the best companies that we have worked with! The company has either met or exceeded all of the goals that we initially set for all of the projects that they implemented for us. I am sure that our company will partner with them again in the future.</p>
            <button type="button" class="btn btn-lg text-light pt-2  mt-2" style={{backgroundColor:"#1ab785"}}>Learn More</button>
        </div>
        <div class="col-sm-6">
            <img  src={Img4} />
        </div>
        </div>
       </div>
        </div>
      </>
    );
  }
}
export default Main;
