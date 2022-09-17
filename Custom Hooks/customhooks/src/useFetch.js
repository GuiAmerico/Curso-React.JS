import React from 'react'

const useFetch = () => {
    let response;
    let json;

    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
  
    const request = React.useCallback(async (url, options) => {
        try{
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
    
            
        } catch(erro){
            setError(erro)
            json = null;
        } finally{
            setLoading(false);
            setData(json);
            return{response, json};
        }
    }, [])

    return (
    {data, error, loading, request}
  )
}

export default useFetch