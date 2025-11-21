import { HeaderComponent } from "../components/header"
import Card from '../components/card'
import { productState } from "../atoms/dataAtom"
import { useRecoilValue } from "recoil";


function Fashion() {
   const products=useRecoilValue(productState);
   console.log("products are:",products);
   return<>
  <HeaderComponent/>
    <div>
       <div className="grid gap-6 m-8 mt-12 grid-cols-3  ">
       {products.filter((p) => p.category==='fashion')
       .map((p)=>{
        console.log("at filter fashion urls are:",p.url);
        return(
          <Card  key={p._id} title={p.title} image={p.img} description={p.description} width='lg' height='sm' price={p.price}  placeholder="send any message. . ."  />
        )
       })}
      </div>
    </div>
    </>
}

export default Fashion
