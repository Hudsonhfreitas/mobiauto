export const getData = async (searchTerm: String) => {
    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/${searchTerm}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    .then(resp => resp.json())
    .catch(error => error)

    return await response
}