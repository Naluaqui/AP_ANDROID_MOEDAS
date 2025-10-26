const BASE_URL = 'https://open.er-api.com/v6/latest'

export async function exchangeRateApi(fromCurrency) {

    try {
        const response = await fetch(`${BASE_URL}/${fromCurrency}`)
        const data = await response.json()
        
        return data

    } catch(err) {
        console.error('Erro ao buscar a taxa de câmbio:', err)
    }

    
}

