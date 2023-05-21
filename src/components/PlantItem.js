
import CareScale from "./CareScale"
import '../styles/PlantItem.css'

const PlantItem = (props) => {

    const { name, category, cover, light, water} = props

    return (
        <li className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={cover} alt={ cover + 'cover'}/>
            {name} | {category}
            {/* {isBestSale && <div className="lmj-sales"> Solde</div>} */}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem