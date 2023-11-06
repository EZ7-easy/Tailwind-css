import { Hero, Footer,
PopularProducts, SuperQuality } from './sections'

import Nav from './components/Nav'

const App = () => (
  <main className="relative">
      <Nav/> 
    <section className="xl:padding-1
    wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="bg-black padding-x padding-d pb-8">
      <Footer/>
    </section>
  </main>
)

export default App