import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';

function ItemListContainer({categoria}) {
const productos = useProducts(categoria);
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