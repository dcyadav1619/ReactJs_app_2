import Hero from "./hero";


const Searchview = ({keyword,searchResults})=>{
  const title = "you are seaching for keyword...." + keyword
  console.log(title,keyword,searchResults)
  return(
    <>
    <Hero text={title} />
    </>
  )}

export default Searchview;
