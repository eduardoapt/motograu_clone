import { useNavigate } from 'react-router-dom'
import './index.css'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function StartGame() {
  const navigate = useNavigate()

  const serverUrl =
    'https://hypetech-demo-api-service-developer.up.railway.app/games/request-access'

  const gameData = {
    game: 'motograu',
    lang: 'pt',
    currency: 'BRL',
  }

  const unsuccessfulUrl = '/de87447d9c22b8cac7593850a1c60387'

  const startGame = async () => {
    try {
      const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      })

      const gameUrl =
        response?.gameUrl.lastIndexOf('/') > -1
          ? response?.gameUrl.slice(
              response?.gameUrl.lastIndexOf('/'),
              response?.gameUrl.length
            )
          : unsuccessfulUrl

      navigate(gameUrl)
    } catch (e) {
      navigate(unsuccessfulUrl)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={startGame}
        className="flex items-center rounded-full border-2 border-red-500 py-2 px-5 font-bold text-white text-3xl whitespace-nowrap bg-gradient-to-r from-red-500 to-red-700 gap-4 hover:brightness-90 hover:translate-y-1px transition-transform"
      >
        Iniciar MotoGrau
        <RocketLaunchIcon className="h-10 w-10" />
      </button>
    </div>
  )
}
