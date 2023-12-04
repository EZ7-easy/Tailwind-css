import { Hero, Footer,
PopularProducts} from './sections'

import Nav from './components/Nav'

const App = () => (
  <main className="relative">
    <section>

        <Nav/>
    </section>
    <section className="xl:padding-1
    wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section>
      <Footer/>
    </section>
  </main>
)

export default App