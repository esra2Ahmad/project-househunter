import Navbar from "@/components/Navbar"
import Herosection from "@/components/Herosection"

export default function Home() {
  return (
    <div>
      <div className="z-20 bgGradient">
        <Navbar/>
        <Herosection/>
      </div>
    </div>
  )
}
