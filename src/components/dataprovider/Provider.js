

export const FetchOfficers = () =>{
    return fetch("https://criminals.glassdale.us/officers")
            .then(response => response.json())
}