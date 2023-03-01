import { useParams } from "react-router-dom";
import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';

function ItemListContainer() {
const  {categoryName} = useParams();
const productos = useProducts(categoryName);
const productosOferta = productos.filter((prod) => prod.oferta === "true");

  return (
   <section className='section collection'>
    <TitleProductCards title={"COLLECTION"} subTitle={"Our Top Collection"}/>
    <CategoriasContainer/>
    <ItemList productos={productos} productosOferta={productosOferta}/>
    </section>
  )
}

export default ItemListContainer