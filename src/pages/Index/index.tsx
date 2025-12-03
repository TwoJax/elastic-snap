import { Scanner, useDevices } from '@yudiel/react-qr-scanner'
import React, { memo, useState } from 'react'

import AnimatedQrCode from '@/assets/images/animated-qr-code.svg'

import styles from './index.module.css'

interface Props {}

const Index: React.FC<Props> = memo(() => {
  const devices: MediaDeviceInfo[] = useDevices()
  const [data, setData] = useState<string | null>(null)
  const [selectedDevice, setSelectedDevice] = useState<MediaDeviceInfo | null>(
    null,
  )

  return (
    <>
      <select>
        {devices.map((device: MediaDeviceInfo) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label}
          </option>
        ))}
      </select>
      <Scanner
        onScan={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <img src={AnimatedQrCode} alt="Animated QR Code" />
        <button
          className="bg-elastic-blue text-white px-4 py-2 rounded cursor-pointer w-full"
          // onClick={() => setShowQrCodeScanner(true)}
        >
          Scan QR Code
        </button>
      </div>
    </>
  )
})
Index.displayName = 'Index'

export default Index
