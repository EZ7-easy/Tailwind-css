import { bigShoe1, bigboy, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6,thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, people1, people2, people3 } from "../assets/images";
import {FaCalendar} from 'react-icons/fa'

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-#37393F font-palanquin text-center justify-center"><strong>Related Projects</strong></h1>
      </div>

      <div className="mt-16 ml-212 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-14">
        <div><img src={people1}/>
            <p className="font-#37393F text-2xl font-montserrat">
                Financial Investment<br/>
            </p>
            <p className="font-#7D7D7D text-lg font-serif">
                <FaCalendar/>Sep 2022
            </p>
        </div>
        <div><img src={people2}/>
            <p className="font-#37393F text-2xl font-montserrat">
                Marketing Strategy<br/>
            </p>
            <p className="font-#7D7D7D text-lg font-serif">
                <FaCalendar/>Sep 2022
            </p>
        </div>
        <div><img src={people3}/>
            <p className="font-#37393F text-2xl font-montserrat">
                Business Consulting<br/>
            </p>
            <p className="font-#7D7D7D text-lg font-serif">
                <FaCalendar/>Sep 2022
            </p>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts