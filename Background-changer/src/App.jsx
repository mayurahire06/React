import { useState } from "react"

const App = () => {

  const [color, setColor] = useState("#27272a")

  return (
    <div className="h-screen w-full flex justify-center duration-200"
    style={{backgroundColor: color}} >
      <div className="bg-white flex justify-center absolute bottom-0 mb-6 h-14 rounded-full">
        <div className="flex justify-center flex-wrap ">
          <button className="px-2 py-1 m-2 font-bold text-2xl rounded-3xl mx-2"
          onClick={() => setColor("red")}
          style={{backgroundColor: "red"}}
          >Red</button>

          <button className="px-2 py-1 m-2 font-bold text-2xl rounded-3xl mx-2"
          onClick={() => setColor("yellow")}
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button className="px-2 py-1 m-2 font-bold text-2xl rounded-3xl mx-2"
          onClick={() => setColor("blue")}
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App