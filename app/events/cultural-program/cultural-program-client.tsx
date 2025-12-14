'use client'

import { useState } from 'react'
import { EventTemplate } from '@/components/sections/event-template'
import { ImageModal } from '@/components/ui/image-modal'

export default function CulturalProgramClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const images = [
    '/images/Events/Cultural programs/hero-image.jpeg',
    '/images/Events/Cultural programs/10.jpeg',
    '/images/Events/Cultural programs/12.jpeg',
  ]

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % images.length 
      : (selectedIndex - 1 + images.length) % images.length
    setSelectedIndex(newIndex)
    setSelectedImage(images[newIndex])
  }



  return (
    <>
      <EventTemplate
        title="Cultural Programs"
        subtitle="BY Swami Vivekanand Seva Trust"
        description="Cultural Programs organized by SVST to promote cultural awareness, social harmony, and holistic personality development among youth in Hingoli."
        mainImage="/images/Events/Cultural programs/hero-image.jpeg"
        eventDate="Year-round Cultural Events"
        location="Training Center, Nimbala Makta, MIDC, MAVIM Ghar, Hingoli"
        duration="1 Day Event"
        participants="Trainees, Local Youth, Community Members"
        category="Cultural Program"
        features={[
          {
            icon: "Music",
            title: "Traditional Folk Performances",
            description: "Vibrant performances of Lavani, Powada, and Tamasha showcasing Maharashtra's rich cultural traditions."
          },
          {
            icon: "Users",
            title: "Group Dance & Singing",
            description: "Musical performances highlighting themes of social unity, women empowerment, and national pride."
          },
          {
            icon: "Award",
            title: "Cultural Competitions",
            description: "Talent competitions including singing, storytelling, and poetry recitation."
          }
        ]}
        stats={[
          {
            label: "Participants",
            value: "100+",
            icon: "Users"
          },
          {
            label: "Performances",
            value: "15+",
            icon: "Music"
          },
          {
            label: "Art Forms",
            value: "8",
            icon: "Award"
          }
        ]}
        gallery={images.map((image, index) => ({
          src: image,
          alt: `Cultural Program ${index + 1}`,
          caption: `Cultural Program Activity ${index + 1}`
        }))}
        highlights={[
          {
            title: "Cultural Heritage Preservation",
            description: "Promoting the rich cultural traditions of Maharashtra and India through authentic performances and workshops."
          },
          {
            title: "Youth Empowerment",
            description: "Providing platforms for trainees and local youth to express their cultural talents and build confidence."
          }
        ]}
        content={{
          overview: "Swami Vivekanand Seva Trust organized a comprehensive Cultural Program to promote cultural awareness, social harmony, and holistic personality development among youth at the Training Center in Nimbala Makta, MIDC, MAVIM Ghar, Hingoli.",
          objectives: [
            "To provide a platform for trainees and local youth to express their cultural talents",
            "To encourage participation in social and cultural activities for overall personality development",
            "To promote the rich cultural heritage of Maharashtra and India",
            "To create an environment of unity, creativity, and motivation among youth"
          ],
          activities: [
            "Traditional Folk Performances featuring Lavani, Powada, and Tamasha",
            "Group Dance and Singing performances with themes of social unity",
            "Drama Presentation focusing on social awareness topics",
            "Cultural Competitions including singing, storytelling, and poetry",
            "Motivational Speech emphasizing cultural participation importance"
          ],
          impact: "The Cultural Program was a remarkable success, entertaining and educating participants about preserving cultural heritage and working towards social harmony. The Trust continues to believe in the power of culture as a tool for community development and youth empowerment."
        }}
      />
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={closeModal}
        images={images}
        currentIndex={selectedIndex}
        onNavigate={(index) => {
          setSelectedIndex(index)
          setSelectedImage(images[index])
        }}
        showNavigation={true}
      />
    </>
  )
}