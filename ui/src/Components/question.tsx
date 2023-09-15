export default function Question() {

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

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Good morning, O Deep Thought</h1>
          <p className="mt-4 text-xl text-white">
          Do you have an answer for the ultimate question of life, the universe, and everything?
          </p>
          <a
            href="/answer"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Answer
          </a>
        </div>
        <div className="relative py-32">
          </div>
      </div>

    </div>
  )
}
