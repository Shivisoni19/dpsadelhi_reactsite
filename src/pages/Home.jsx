import React from 'react'
import TopSlider from '../components/home/TopSlider'
import { Helmet } from "react-helmet";
import AboutDPSA from '../components/home/AboutDPSA';
import OurVision from '../components/home/OurVision';
import OurPartyHistory from '../components/home/OurPartyHistory';
import JoinNowForm from '../components/home/JoinNowForm';
import UpcomingEvents from '../components/home/UpcomingEvents';
import DonationSection from '../components/home/DonationSection';
import PoliticalGallery from '../components/home/PoliticalGallery';
import Members from '../components/home/Members';
import LatestNews from '../components/home/LatestNews';
import BioSection from '../components/home/BioSection';

const meta = {
  title: 'DPSA | Divyang Para Sports Association of Delhi',
  description: 'I am a description, and I can create multiple tags',
  // canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    },
    robots: 'noindex, nofollow', // Add the robots meta tag
    googlebot: 'noindex, nofollow' // Add the google bot meta tag
  }
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>

      <TopSlider/>
      <AboutDPSA/>
      <BioSection/>
      <OurVision/>
      <OurPartyHistory/>
      <JoinNowForm/>
      <UpcomingEvents/>
      <DonationSection/>
      <PoliticalGallery/>
      {/* <Members/> */}
      <LatestNews/>
    </div>
  )
}

export default Home
