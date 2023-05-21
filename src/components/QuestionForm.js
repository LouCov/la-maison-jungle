import { useState } from 'react'

const QuestionForm = () => {
    
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    let isInputError = false

    const checkValue = (value) => {
        if (!value.includes('f')){
            setInputValue(value)
        }
        
        isInputError = true
    }

    return (
        <div>
            <textarea 
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}    
            />

            <button onClick={() => alert(inputValue)}>Alertez moi</button>

            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
        </div>
    )
}

export default QuestionForm