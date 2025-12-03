import { Scanner } from '@yudiel/react-qr-scanner'
import type { IDetectedBarcode } from '@yudiel/react-qr-scanner'
import React, { useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  onScan: (result: string) => void
  onError: (error: { message: string }) => void
}

const QrCodeScanner: React.FC<Props> = ({ isOpen, onScan, onError }) => {
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsPaused(false)
    } else {
      setIsPaused(true)
    }
  }, [isOpen])

  const handleScan = (detectedCodes: IDetectedBarcode[]) => {
    setIsPaused(true)
    onScan(detectedCodes[0].rawValue)
  }

  return (
    <dialog
      open={isOpen}
      className="w-full h-full z-10 absolute top-0 left-0 bg-white"
    >
      <Scanner
        onScan={handleScan}
        onError={(error) => onError(error as any)}
        paused={isPaused}
        formats={['qr_code']}
        components={{
          finder: false,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* IMPORTANT: Ensure the width/height here matches the actual
      scan area of the library so the user knows exactly where to point.
    */}
        <div className="w-64 h-64 border-2 border-green-500 rounded-lg opacity-75"></div>
      </div>
    </dialog>
  )
}

export default QrCodeScanner
