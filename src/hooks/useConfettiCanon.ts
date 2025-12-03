import confetti from 'canvas-confetti'

interface ConfettiOptions {
  duration: number
  colors: string[]
}

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

export const useConfettiCanon = (options: ConfettiOptions) => {
  const animationEnd = Date.now() + options.duration

  const defaults = {
    colors: options.colors,
    spread: 360,
    startVelocity: 30,
    ticks: 60,
    zIndex: 10,
  }

  const fire = () => {
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / options.duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  return {
    fire,
  }
}
