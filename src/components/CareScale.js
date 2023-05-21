
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const CareScale = ({scaleValue, careType}) => {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt="sun-icon" />
    ) : (
        <img src={Water} alt="water-icon" />
    )

    const handClick = () => {
        const niveauText = ['peu', 'moderement', 'beaucoup']
        alert(`Cette palnte requiert ${niveauText[scaleValue - 1]} de ${careType === 'light' ? 'lumiere' : 'd\'arrosage'}`)
    }

    return (
        <div onClick={handClick}> {range.map((rangeElem) =>
            scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>)}
        </div>
    )
}

export default CareScale