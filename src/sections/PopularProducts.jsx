import {people1, people2, people3, people4, people5, people6 } from "../assets/images";
import {FaCalendar} from 'react-icons/fa'

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-#37393F font-palanquin text-center justify-center"><strong>Discover our latest client projects</strong></h1>
        <p className='text-md text-[#7D7D7D] text-center justify-center'>
            Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative <br/>
            approaches to corporate strategy foster collaborative thinking to further the overal.
        </p>
      </div>

      <div className="mt-16 ml-212 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-14">
        <div><img src={people1}/>
            <p className="text-[#37393F] text-xl font-montserrat">
                <strong>Financial Investment</strong><br/>
            </p>
            <p className="text-[#7D7D7D] text-lg font-serif inline-flex gap-2">
                <FaCalendar/>Sep 2022
            </p>
        </div>
        <div><img src={people2}/>
            <p className="text-[#37393F] text-xl font-montserrat">
                <strong>Marketing Strategy</strong><br/>
            </p>
            <p className="text-[#7D7D7D] text-lg inline-flex gap-2 font-serif">
                <FaCalendar/>Sep 2022
            </p>
        </div>
        <div><img src={people3}/>
            <p className="text-[#37393F] text-xl font-montserrat">
                <strong>Business Consulting</strong><br/>
            </p>
            <p className="text-[#7D7D7D] text-lg font-serif inline-flex gap-2">
                <FaCalendar/>Sep 2022
            </p>
        </div>
      </div>

        <div className="mt-16 ml-212 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-14">
            <div><img src={people4}/>
                <p className="text-[#37393F] text-xl font-montserrat">
                    <strong>Financial Investment</strong><br/>
                </p>
                <p className="text-[#7D7D7D] text-lg font-serif inline-flex gap-2">
                    <FaCalendar/>Sep 2022
                </p>
            </div>
            <div><img src={people5}/>
                <p className="text-[#37393F] text-xl font-montserrat">
                    <strong>Web Development</strong><br/>
                </p>
                <p className="text-[#7D7D7D] text-lg font-serif inline-flex gap-2">
                    <FaCalendar/>Sep 2022
                </p>
            </div>
            <div><img src={people6}/>
                <p className="text-[#37393F] text-xl font-montserrat">
                    <strong>Financial Investment</strong><br/>
                </p>
                <p className="text-[#7D7D7D] text-lg font-serif inline-flex gap-2">
                    <FaCalendar/>Sep 2022
                </p>
            </div>
        </div>
    </section>
  )
}

export default PopularProducts