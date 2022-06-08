const queryString = new Proxy(new URLSearchParams(window.location.search), {
    // @ts-ignore
    get: (searchParams, prop) => searchParams.get(prop),
});


export const getAuthDataFromUrl = () => {
    // @ts-ignore
    const address = queryString['address']
    // @ts-ignore
    const clientId = queryString['clientId']

    return {
        wallet: address,
        clientId,
    }
}
