import About from "@/components/About"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <main className=' min-h-screen bg-very-light-grey px-8 sm:px-10'>
      <div className="wrapper">
        <Hero />
        <About />

      </div>

    </main>
  )
}



