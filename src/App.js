import React, {useState} from 'react';
import BinarySearchTree from './components/binarytree.js'
import './styles/App.css';



function App() {
    const [text, changeText] = useState('это текст')

    return(
        <div className='App'>
            <div className='inputs'>
                <input
                id='numbers'
                type={'text'}
                value={null}
                />
            </div>
            <div className='buttons'>
                <button onClick={() => changeText(document.getElementById('numbers').value)}>Добавть</button>
                <button onClick={() => changeText(' ')}>Удалить</button>
            </div>
            <h1>{text}</h1>
            <div className='tree'>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;