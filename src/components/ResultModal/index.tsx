import React, { useEffect } from 'react'

import BoseHeadphonesImage from '@/assets/images/bose-headphones.png'
import SegwayImage from '@/assets/images/segway-e2-pro.avif'
import { useConfettiCanon } from '@/hooks/useConfettiCanon'

interface Props {
  isOpen: boolean
  scanNumber: number | null
}

const grandPrizeScanNumber = 87
const runnerUpScanNumbers = [
  27, 39, 57, 70, 105, 160, 190, 210, 240, 275, 280, 285, 290, 295, 300, 317,
  314, 315, 316,
]

const ResultModal: React.FC<Props> = ({ isOpen, scanNumber }) => {
  const isGrandPrize = scanNumber === grandPrizeScanNumber
  const isRunnerUp = runnerUpScanNumbers.includes(Number(scanNumber)) ?? false

  const { fire } = useConfettiCanon({
    duration: 5000,
    colors: [
      '#0b64dd',
      '#128d91',
      '#48efcf',
      '#ff957d',
      '#f04e98',
      '#fec514',
      '#153385',
    ],
  })

  useEffect(() => {
    if (isGrandPrize || isRunnerUp) {
      fire()
    }
  }, [isGrandPrize, isRunnerUp, fire])

  return (
    <dialog
      open={isOpen}
      className="w-full h-full z-5 absolute top-0 left-0 bg-white"
    >
      <div className="flex flex-col items-center justify-center gap-10 p-10 h-full w-full text-center">
        <h1 className="text-3xl font-mierb font-semibold text-elastic-blue">
          {isGrandPrize || isRunnerUp ? 'Congratulations!' : 'Sorry!'}
        </h1>

        {isGrandPrize && (
          <p className="text-lg font-inter text-ink">
            You've won the <strong>Segway E2 Pro</strong> electric scooter!
            <img src={SegwayImage} alt="Segway E2 Pro" className="w-full" />
          </p>
        )}
        {isRunnerUp && (
          <p className="text-lg font-inter text-ink">
            You have won a pair of <strong>Bose Headphones</strong>!
            <img
              src={BoseHeadphonesImage}
              alt="Bose Headphones"
              className="w-full mt-6"
            />
          </p>
        )}
        {!isGrandPrize && !isRunnerUp && (
          <p className="text-lg font-inter text-ink">
            Not a prize winner, but please enjoy cocktails and delicious bites
            inside!
          </p>
        )}

        <button
          className="bg-elastic-blue text-white px-4 py-2 rounded cursor-pointer w-full font-mierb text-2xl font-semibold"
          onClick={() => window.location.reload()}
        >
          Back
        </button>
      </div>
    </dialog>
  )
}

export default ResultModal
