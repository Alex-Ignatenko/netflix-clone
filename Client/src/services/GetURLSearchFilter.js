export const GetURLSearchFilter = (searchFromURL,filter) => {

    console.log("searchFromURL:"+ searchFromURL)
    //Get all the filter options backend requires from url
    const searchParams = new URLSearchParams(searchFromURL);  
    console.log("searchParams" + searchParams)
    const page = searchParams.get('page') || 1;
    const query = searchParams.get('query') || '';
    const genre = searchParams.get('genre') || '';
    console.log(query)
    console.log(genre)
    //const order = searchParams.get('order') || 'newest';
    
    //Get all the filter options backend requires from filter object

    const filterPage = filter.page || page;
    let filterQuery = filter.query || query;
    const filterGenre = filter.genre || genre;

    if(filter.query === "" && query.length === 1){
        filterQuery="";
    }

    console.log(filterQuery)
    console.log(filterGenre)
    //const filterOrder = filter.order || order;


    let link = "";

    if(!filterQuery && !filterGenre) {
         link = "/search";
         console.log(link)
         return link;
    }

    if (!filterQuery){
        link = `/search?genre=${filterGenre}&page=${filterPage}`;
        console.log(link)
        return link;
    } 

    if (!filterGenre){
        link = `/search?query=${filterQuery}&page=${filterPage}`;
        console.log(link)
        return link;
    }
    link = `/search?genre=${filterGenre}&page=${filterPage}&query=${filterQuery}`;
    console.log(link)
    return link;

};