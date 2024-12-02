import BasicInfo from "./components/BasicInfo"
import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  return (
    <div className="flex-1">
      <Header />
      <div className="flex px-[24px] space-x-[24px] mt-[26px] absolute">
        <BasicInfo />
        <div className="flex-1 space-y-[24px]">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
