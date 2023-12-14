import React from 'react'

const LatestNews = () => {
  return (
    <>
      {/* <!-- News Section Start --> */}
  <div class="news-section-start">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section-title">
            <div class="subtitle wow animate__animated animate__fadeInUp">
              <div class="icon">
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
              </div>
              <p>Our News</p>
              <div class="icon">
                <span class="icon-star"></span>
                <span class="icon-star"></span>
                <span class="icon-star"></span>
              </div>
            </div>
            <h4 class="title wow animate__animated animate__fadeInUp">Latest News & Articles</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="news-single-items wow animate__animated animate__fadeInUp">
            <div class="news-bg">
              <span class="even">Event</span>
              <div class="content">
                <a href="news-single.html"><h4 class="title">Many important brands have given us their trust</h4></a>
                <div class="author-meta">
                  <p class="author-name">By:Smith Roy</p>
                  <p>24th March,2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="news-single-items wow animate__animated animate__fadeInUp animate__delay-1s">
            <div class="news-bg">
              <span class="even">Event</span>
              <div class="content">
                  <a href="news-single.html"><h4 class="title">Many important brands have given us their trust</h4></a>
                <div class="author-meta">
                  <p class="author-name">By:Smith Roy</p>
                  <p>24th March,2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <ul class="news-single-list wow animate__animated animate__fadeInRight animate__delay-2s">
            <li class="news-single-list-items">
              <div class="thumb">
                <img src="img/news/news.jpg" alt=""/>
              </div>
              <div class="content">
                <span class="date">24th March,2021</span>
                <h4 class="title"><a href="news-single.html"> Many important brands have given us their</a></h4>
              </div>
            </li>
            <li class="news-single-list-items">
              <div class="thumb">
              <img src="img/news/news.jpg" alt=""/>
              </div>
              <div class="content">
                <span class="date">24th March,2021</span>
                <h4 class="title"><a href="news-single.html"> Many important brands have given us their</a></h4>
              </div>
            </li>
            <li class="news-single-list-items">
              <div class="thumb">
              <img src="img/news/news.jpg" alt=""/>
              </div>
              <div class="content">
                <span class="date">24th March,2021</span>
                <h4 class="title"><a href="news-single.html"> Many important brands have given us</a></h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- News Section End  --> */}
    </>
  )
}

export default LatestNews
