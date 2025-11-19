import { HeaderComponent } from "../components/header"
import Card from '../components/card'

function Fashion() {
   return<>
  <HeaderComponent/>
    <div>
      <div className="grid gap-6 m-8 mt-12 grid-cols-3  ">
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      <div><Card placeholder="send any message. . ." width='lg' height="md" /></div>
      </div>
    </div>
    </>
}

export default Fashion
