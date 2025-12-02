import React from 'react'

interface Props {
  show: boolean
  videoRef: React.RefObject<HTMLVideoElement | null>
}

const QrCodeScanner: React.FC<Props> = ({ show, videoRef }) => {
  return show ? (
    <video
      ref={videoRef}
      className="w-full h-full z-10 absolute top-0 left-0 bg-white"
    />
  ) : null
}

export default QrCodeScanner
