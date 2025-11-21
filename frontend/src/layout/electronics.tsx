import { HeaderComponent } from "../components/header"
import Card from '../components/card'
import { productState } from "../atoms/dataAtom"
import { useRecoilValue } from "recoil";



function Electronics() {
   const products=useRecoilValue(productState);
    return<>
  <HeaderComponent/>
    <div>
      <div className="grid gap-6 m-8 mt-12 grid-cols-3  ">
       {products.filter((p) => p.category==='electronic')
       .map(({title,description,url,price})=>{
        return(
          <Card title={title} url={url} description={description} width='lg' height='sm' price={price}  placeholder="send any message. . ."  />
        )
       })}
      </div>
    </div>
    </>
}

export default Electronics
