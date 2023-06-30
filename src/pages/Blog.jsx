import React from 'react'
import "./blog.css"
//import { useEffect } from 'react'
//import SearchBar from "./components/SearchBar"

export default function Blog() {
    const [posts, setPosts] = React.useState([
        {
            id: 1,
            title: "My post 1",
            body : "his a Rollie, not a stopwatch, shit dont ever stopThis the flow that got the block hot, shit got super hot, ayyGive me my respect, give me my respectI just took it left like I'm Ambidex, I move through London with the Euro step"
        },
        {
            id: 2,
            title:"second blog",
            body: "Future took the business and ran it for meI let Ollie take the owl, told him brand it for me get two million a pop and that's standard for meLike I went blind, dog, you gotta hand it to meGotta gimme that shit, dogPrayed, then I prayed again (Amen, Lord)Had a moment, but it came and went (They don't love you no moreou don't wanna play with him (Nah, nah, nah)They'll be mournin' you like 8AM (R.I.P.)"
        }
    ])

    const showPost = posts.map((post) => (
    <div>key={post.id}</div>,
    <h2>{post.title}</h2>,
    <p >{post.body}</p>))

    const [search, setSearch]= React.useState('')
    const [searchResults, setSearchResults] = React.useState([])
    React.useEffect(
        () => {
            const filteredResults = posts.filter(posts => ((posts.body).toLowerCase()).includes(search.toLowerCase())
            || ((posts.title).toLowerCase()).includes(search.toLowerCase()))

            setSearchResults(filteredResults.reverse())
        },[posts, search])

    //move to search bar pass search and setSearch as function props.
    return (
        <main className='Blog container'>
           <div className='searchBar'>
            <form className='searchForm' 
                  onSubmit={function(event){
                     event.preventDefault()
                   }}>
                   <input
                   className='searchInput'
                   id='search'
                   type="text"
                   placeholder='Search for'
                   onChange={function(event){
                    setSearch(event.target.value)
                   }}
                   />
                   <button className='searchbutton'><i className='fa fa-search'></i></button>
           </form>
           </div>
             //<div>
                <h1>blogs</h1>
                
                <div>
                   {searchResults.map((post) => (
                   <div key={post.id}>
                    <h2>{post.title}</h2>
                   <p>{post.body}</p>
                    </div>))}

                </div>

             </div>

    
        </main>
    )
}

