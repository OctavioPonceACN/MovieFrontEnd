
import './App.css'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'

function App() {


  return (
    <>
      <Header title={'Movie App'} />
      <Content data={[]} />
      <Footer title={'Movie App'} date={new Date()} />
    </>
  )
}

export default App
