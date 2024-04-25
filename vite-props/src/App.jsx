import './App.css'
import Card from './component/Card'
import Info from './Info'
function App() {
  const cards = Info.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})      

  return (
    <section className="cards-list">
                {cards}
            </section>
  )
}

export default App
