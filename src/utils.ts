const queryString = new Proxy(new URLSearchParams(window.location.search), {
    // @ts-ignore
    get: (searchParams, prop) => searchParams.get(prop),
});


export const getAuthDataFromUrl = () => {
    // @ts-ignore
    const authToken = queryString['authToken']
    // @ts-ignore

    return {
        authToken,
    }
}
