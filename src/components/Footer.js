
import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.')
        }
    }

    const handleSubmit = () => {
        if (inputValue.length === 0) {
            alert(" Votre email je vous pris")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			
            <div>
                <input
                    placeholder='Entrez votre email'
                    onChange={handleInput}
                    value={inputValue} 
                    onBlur={handleBlur}
                />
                <button className='lmj-email-button-submit' onClick={handleSubmit}>Envoyer</button>
            </div>

        </footer>
    )
}

export default Footer