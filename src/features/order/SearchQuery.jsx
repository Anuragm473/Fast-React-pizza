import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function SearchQuery() {
    const [query,setQuery]=useState('')
    const navigate=useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(!query) return
        navigate(`/order/${query}`)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Search Order #' value={query} onChange={e=>setQuery(e.target.value)}></input>
    </form>
  )
}
