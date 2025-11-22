import { useRecoilValue } from "recoil"
import Card from "../components/card"
import { HeaderComponent } from "../components/header"
import { productState } from "../atoms/dataAtom"
import UpdateCard from "../components/updateCard"



function AllCategories() {
  const products=useRecoilValue(productState);
  console.log("products are:",products); 
  


  return<>
  <HeaderComponent/>
    <div>
      <div className="grid gap-6 m-8 mt-12 grid-cols-3">
      {products.map((p) => (

  <Card 
     key={p._id}
     title={p.title}
     image={p.img}
     description={p.description}
     width="lg"
     height="sm"
     price={p.price}
     placeholder="send any message..."
  />
))}
      </div>
</div>
</>
}



export default AllCategories
