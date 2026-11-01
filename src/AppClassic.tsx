import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [number, setNumber] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [refreshToken, setRefreshToken] = useState(0)

  useEffect(() => {
    setIsLoading(true)

    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(response => response.json())
      .then(data => {
        setNumber(data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [refreshToken])

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <h1>Número: {number}</h1>}

      <div>{error}</div>

      <button disabled={isLoading} onClick={() => setRefreshToken(refreshToken + 1)}>
        Nuevo número
      </button>
    </>
  )
}

export default App
