import React, { memo, useState } from 'react'
import { useZxing } from 'react-zxing'
import QrCodeScanner from '@/components/QrCodeScanner'

import AnimatedQrCode from '@/assets/images/animated-qr-code.svg'

import styles from './index.module.css'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  const [result, setResult] = useState<string | null>(null)
  const [showQrCodeScanner, setShowQrCodeScanner] = useState(false)

  const { ref } = useZxing({
    onDecode: (result) => {
      setResult(result)
      setShowQrCodeScanner(false)
    },
  })

  return (
    <>
      <QrCodeScanner show={showQrCodeScanner} videoRef={ref} />
      <div className="flex flex-col items-center justify-center gap-10">
        <img src={AnimatedQrCode} alt="Animated QR Code" />
        <button
          className="bg-elastic-blue text-white px-4 py-2 rounded cursor-pointer w-full"
          onClick={() => setShowQrCodeScanner(true)}
        >
          Scan QR Code
        </button>
      </div>
    </>
  )
})
Index.displayName = 'Index'

export default Index
