import CategoriasContainer from './CategoriasContainer'
import ItemList from './ItemList'
import TitleProductCards from './TitleProductCards';
import useProducts from '../../customHooks/useProducts';
import useProductsFb from '../../customHooks/useProductsFb';

function ItemListContainer({categoria}) {
const [productos, productosFiltrados] = useProducts(categoria);
const [productosFb] = useProductsFb(categoria)

const productosOferta = productos.filter((prod) => prod.oferta === "true");
console.log(productosFb)
  return (
   <section className='section collection'>
    <TitleProductCards title={"COLLECTION"} subTitle={"Our Top Collection"}/>
    <CategoriasContainer/>
    <ItemList categoria={categoria} productos={productos} productosFiltrados={productosFb} productosOferta={productosOferta}/>
    </section>
  )
}

export default ItemListContainer
