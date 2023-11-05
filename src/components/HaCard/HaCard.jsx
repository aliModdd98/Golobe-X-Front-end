import { Container } from "react-bootstrap"
import SectionTitle from "../SectionTitle/SectionTitle"
import BigCard from "./BigCard/BigCard"




const HaCard = () => {
  return (
    <section>
    <Container>
        <div>
        <SectionTitle title="Fall into travel
" subTitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." button="See All" />
        </div>
        <div>
          <BigCard title="Backpacking Sri Lanka"  text="Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living."  price="700 $"  button="Book Flight"  />
        </div>

    </Container>
    </section>
  )
}

export default HaCard
