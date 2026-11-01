import { useQuery } from '@tanstack/react-query'


const getCryptoNumber = async (): Promise<number> => {
    // throw 'Error: Simulated error for testing purposes'

    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
        .then(response => response.json())

    return Number(response)
}

export const useRandom = () => {
    const randomQuery = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        retry: false,
        refetchOnWindowFocus: false,
    })
    return { randomQuery }
}
