import { useQuery } from '@tanstack/react-query'
import './App.css'

const getCryptoNumber = async (): Promise<number> => {
  // throw 'Error: Simulated error for testing purposes'

  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(response => response.json())

  return Number(response)
}

function App() {

  const { isLoading, isFetching, data: number, error, refetch } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    retry: false,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>Número: {number}</h1>}

      <div>{JSON.stringify(error)}</div>

      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo número
      </button>
    </>
  )
}

export default App
