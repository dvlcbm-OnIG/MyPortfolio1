import Header from './Header.jsx'
import Footer from './footer.jsx'
import Food from './Food.jsx'
import Body from './Body.jsx'
function App() {
  return(
    <>
      <Header></Header>
      <main className="page-shell">
        <Body></Body>
        <Food></Food>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
