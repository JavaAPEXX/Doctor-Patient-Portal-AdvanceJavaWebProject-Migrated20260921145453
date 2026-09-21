import React from 'react';

const FeatureCards = () => {
  return (
    <div class="row">
      <div class="col-md-8 p-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card my-card">
              <div class="card-body">
                <p class="fs-5 myP-color">11000+ Healing Hands</p>
                <p>Largest network of the world’s finest and brightest medical experts who provide compassionate care using outstanding expertise.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card my-card">
              <div class="card-body">
                <p class="fw-bold fs-5">Dr. John</p>
                <p class="fs-7">(CEO & Chairman)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card my-card">
          <div class="card-body text-center">
            <img alt="" src="img/doc1.jpg" height="300px" width="230px">
            <p class="fw-bold fs-5">Dr. John</p>
            <p class="fs-7">(CEO & Chairman)</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card my-card">
          <div class="card-body text-center">
            <img alt="" src="img/doc2.jpg" height="300px" width="230px">
            <p class="fw-bold fs-5">Dr. Brad</p>
            <p class="fs-7">(Chief Doctor)</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card my-card">
          <div class="card-body text-center">
            <img alt="" src="img/doc3.jpg" height="300px" width="230px">
            <p class="fw-bold fs-5">Dr. Jennifer</p>
            <p class="fs-7">(Chief Doctor)</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card my-card">
          <div class="card-body text-center">
            <img alt="" src="img/doc4.jpg" height="300px" width="230px">
            <p class="fw-bold fs-5">Dr. Maria</p>
            <p class="fs-7">(Dean)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;