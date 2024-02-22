import { useSearch } from '../hooks/useSearch'
import { MovieCard } from './Movie/MovieCard'

export function SearchPage() {
  const { query, results, setQuery } = useSearch()
  return (
    <main className='mt-24'>
      <section>
        <input
          className='bg-gradient-to-b from-[#33353c] to-[#4e515d] text-white w-[full] h-24 
          font-bold text-5xl pl-16 border-0 fixed left-0 right-0 transition-all duration-300 ease-in-out 
          top-20 z-10 outline-none focus:from-[#33353c] focus:to-[#797d90]'
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Title, character or genre'
        />
        <div className='mt-36 ml-20 mb-20'>
          <div className='flex flex-wrap gap-5'>
            {query
              ? results.map((result, index) => <MovieCard key={index} movie={result} />)
              : null}
          </div>
        </div>
      </section>
    </main>
  )
}
