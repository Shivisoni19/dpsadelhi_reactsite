import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactMain from '../components/contact/ContactMain'
import { Helmet } from "react-helmet";

const Contact = () => {
  const meta = {
    title: 'Contact Us | DPSA Delhi',
    description: 'If you have any queries or need any suggestions!! Why not get in touch with us?',
    // canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the googlebot meta tag
    }
  };
  return (
    <>
     <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
     <ContactHeader/>
     <ContactMain/>
    </>
  )
}

export default Contact
