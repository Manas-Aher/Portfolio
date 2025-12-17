import React, { useState } from 'react'
import Button from '../components/Button'

const Resume = () => {
  const resumeUrl = '/Manas_Aher_resume.pdf'
  const [isDownloading, setIsDownloading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Manas_Aher_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success animation after download
    setTimeout(() => {
      setIsDownloading(false)
      setShowSuccess(true)
      
      // Hide success message after animation
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 800)
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

      {/* Success Toast Notification */}
      {showSuccess && (
        <div
          style={{
            position: 'fixed',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'slideInDown 0.5s ease-out, fadeOut 0.5s ease-in 2.5s forwards',
            zIndex: 1000,
            maxWidth: '400px'
          }}
        >
          {/* Animated Check Icon */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: 'checkmark 0.5s ease-in-out 0.2s forwards' }}
            >
              <polyline points="20 6 9 17 4 12" strokeDasharray="24" strokeDashoffset="24" />
            </svg>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
              Success! 🎉
            </div>
            <div style={{ fontSize: '0.9rem', opacity: 0.95 }}>
              Resume downloaded successfully
            </div>
          </div>

          {/* Confetti particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#9370DB', '#32CD32'][i],
                top: '50%',
                left: '50%',
                animation: `confetti${i} 1s ease-out forwards`,
                opacity: 0
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Styles */}
      <style>{`
        @keyframes slideInDown {
          from {
            transform: translate(-50%, -100px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
        }

        @keyframes checkmark {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes confetti0 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(-40px, -60px) rotate(180deg); }
        }

        @keyframes confetti1 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(50px, -70px) rotate(-200deg); }
        }

        @keyframes confetti2 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(-60px, -30px) rotate(150deg); }
        }

        @keyframes confetti3 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(70px, -40px) rotate(-160deg); }
        }

        @keyframes confetti4 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(-30px, -80px) rotate(220deg); }
        }

        @keyframes confetti5 {
          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
          100% { opacity: 0; transform: translate(40px, -50px) rotate(-140deg); }
        }

        @media (max-width: 768px) {
          .toast-notification {
            left: 1rem !important;
            right: 1rem !important;
            transform: translateX(0) !important;
            max-width: calc(100% - 2rem) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Resume