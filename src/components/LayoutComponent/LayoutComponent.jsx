import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './LayoutComponent.css'

const LayoutComponent = () => {
     
return (
 <>
 <div className="LayoutContainer">
    <div className="ItemList-app">{<ItemListContainer greeting="VidaNova, nueva experiencia, nueva vida, ¡Bienvenido/as!"/>}</div>
 </div>
 </>
)

} 
export default LayoutComponent