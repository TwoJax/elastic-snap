import React, { memo, useState } from 'react'

import AnimatedQrCode from '@/assets/images/animated-qr-code.svg'
import QrCodeScanner from '@/components/QrCodeScanner'
import ResultModal from '@/components/ResultModal'
import { useSupabase } from '@/hooks/useSupabase'

const Index: React.FC = memo(() => {
  const { db } = useSupabase()

  const [showResultModal, setShowResultModal] = useState(false)
  const [showQrCodeScanner, setShowQrCodeScanner] = useState(false)
  const [scanNumber, setScanNumber] = useState<number | null>(null)

  const handleScan = async () => {
    setShowQrCodeScanner(false)

    const { data, error } = await db.from('qr_code_scans').insert({}).select()

    if (error) {
      console.error(error)
      return
    }

    if (data) {
      setScanNumber(Number(data[0].id))
    }

    setShowResultModal(true)
  }

  const handleError = (error: { message: string }) => {
    console.log(error?.message)
  }

  return (
    <>
      <QrCodeScanner
        isOpen={showQrCodeScanner}
        onScan={handleScan}
        onError={handleError}
      />

      <ResultModal isOpen={showResultModal} scanNumber={scanNumber} />

      <div className="flex flex-col items-center justify-center gap-10">
        <img src={AnimatedQrCode} alt="Animated QR Code" />
        <button
          className="bg-elastic-blue text-white px-4 py-2 rounded cursor-pointer w-full font-mierb text-2xl font-semibold"
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
