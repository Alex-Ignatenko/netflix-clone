
const GetSearchFilter = (query) => {

    const searchQuery = query.query || "";
    const genre = query.genre || "";

    const options = {}

    //Build search filters
    if(searchQuery)
        options.title  = {  $regex: searchQuery, $options: 'i'  }
    if (genre)
        options.genre = genre;

    //Define sorting options
    // const sortOrder =
    //   order === "lowest"
    //     ? { price: 1 }
    //     : order === "highest"
    //     ? { price: -1 }
    //     : order === "toprated"  
    //     ? { rating: 1 }
    //     : order === "newest"
    //     ? { createdAt: -1 }
    //     : { _id: -1 };

  return { options }; 
}

export default GetSearchFilter