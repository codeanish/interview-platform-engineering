import axios from "axios"
import { useEffect, useState } from "react"

export default function Answer() {
  const [answer, setAnswer] = useState("?")
  useEffect(() => {
    // Call api to get answer
    axios.get(`${process.env.REACT_APP_API_URL}/answer/?question=What%20is%20the%20meaning%20of%20life%3F`)
    .then((response) => {
      console.log(response.data.answer)
      setAnswer(response.data.answer)
    })
    // Update state
  })

    return (
      <div className="bg-white">
  
  
        {/* Hero section */}
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src="https://source.unsplash.com/cs0sK0gzqCU"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
  
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-64 text-center sm:py-64 lg:px-0">
            <h1 className=" text-2xl font-bold tracking-tight text-white lg:text-8xl">{answer}</h1>
          </div>
          <div className="relative py-32">
          </div>
          <div className="relative py-32">
          </div>
        </div>
  
      </div>
    )
  }