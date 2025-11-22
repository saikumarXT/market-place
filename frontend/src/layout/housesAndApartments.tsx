import { HeaderComponent } from "../components/header"
import Card from '../components/card'
import { productState } from "../atoms/dataAtom"
import { useRecoilValue } from "recoil";


function HousesAndApartments() {
     const products=useRecoilValue(productState);
   return<>
  <HeaderComponent/>
    <div>
          <div className="grid gap-6 m-8 mt-12 grid-cols-3  ">
       {products.filter((p) => p.category === 'realEstate')
       .map((p)=>{
        console.log("at real-estate.:",p);
        return(

          <Card key={p._id} title={p.title} image={p.img} description={p.description} width='lg' height='sm' price={p.price}  placeholder="send any message. . ."  />
        
        )
       })}
      </div>
    </div>
    </>
}

export default HousesAndApartments
