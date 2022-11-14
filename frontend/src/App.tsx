import Header from './components/Header'
import SalesCard from './components/SalesCard'

function App() {
  return (
    <>
      <Header />
      <main id='sales'>
        <div className='dsmeta-container'>
          <SalesCard />
        </div>
      </main>
    </>
  )
}

export default App
