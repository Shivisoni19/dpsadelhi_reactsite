import React from 'react'
import GalleryHeader from '../components/gallery/GalleryHeader'
import GalleryMain from '../components/gallery/GalleryMain'
import Coming_Soon from '../components/gallery/Coming_Soon'
import GalleryContent from '../components/gallery/GalleryContent'

const Gallery = () => {
  return (
    <>
      <GalleryHeader/>
      {/* <Coming_Soon/> */}
      <GalleryContent/>
      <GalleryMain/>
    </>
  )
}

export default Gallery
