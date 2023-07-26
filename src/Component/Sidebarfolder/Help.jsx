import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import hh from '../../Image/help-1.jpg'
import hw from '../../Image/help-2.jpg'
import hc from '../../Image/help-3.jpg'

const Help = () => {

  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={hh} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='frst text-danger'>Online Services</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={hw} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='scnd text-danger'>Consultation</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={hc} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5 className='thrd text-danger'>How to Use</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Help