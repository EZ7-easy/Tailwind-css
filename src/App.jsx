import { Hero, Footer,
PopularProducts, Banner, Information } from './sections'

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
    <section>
        <Banner/>
    </section>
    <section>
        <Information/>
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