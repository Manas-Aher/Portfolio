import React, { useState } from 'react'
import Button from '../components/Button'

const Resume = () => {
  const resumeUrl = '/Manas_Aher_resume.pdf' // Ensure this file exists in the public folder
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Manas_Aher_resume.pdf'
    document.body.appendChild(link)

    // Wait a moment to simulate download trigger before reverting text
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setIsDownloading(false)
    }, 1500) // Adjust time if needed
  }

  return (
    <section id='resume' style={{ padding: '4rem 2rem', textAlign: 'center' }} className='scroll-mt-40'>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Resume</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem', color: '#555' }}>
        Here is a summary of my professional experience and skills. You can download my full resume by clicking the button below.
      </p>
      <div className='flex justify-center'>
        <Button
          className="md:w-100 md:h-16 w-80 h-12"
          id="button"
          text={isDownloading ? 'Downloading...' : 'Download Resume'}
          onClick={handleDownload}
        />
      </div>
    </section>
  )
}

export default Resume
