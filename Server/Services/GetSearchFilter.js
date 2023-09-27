const GetSearchFilter = (query) => {
  const searchQuery = query.query || "";
  const genre = query.genre || "";

  const options = {};

  //Build search filters
  if (searchQuery && searchQuery !== "allContents")
    options.title = { $regex: searchQuery, $options: "i" };
  if (genre && genre !== "allGenres") options.genre = genre;

  return { options };
};

export default GetSearchFilter;
