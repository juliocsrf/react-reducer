import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

const App = () => {
    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const handleAddButton = () => {
        if (nameInput) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameInput
                }
            })
        }
    }

    const handleDelButton = (id: string) => {
        dispatch({
            type: 'DEL',
            payload: { id }
        })
    }

    const handleOrderButton = () => {
        dispatch({
            type: 'ORDER'
        });
    }

    return (
        <div className='p-2'>
            <input className="border-2" type='text' value={nameInput} onChange={handleInputChange} />
            <button onClick={handleAddButton}>Adicionar</button>
            <hr/>

            <button onClick={handleOrderButton}>Reordenar</button>

            Lista de pessoas:
            <ul>
            {list.map((item, index) => (
                <li key={index}>
                    {item.name}
                    <button onClick={() => handleDelButton(item.id)}>[ Deletar ]</button>
                </li>
            ))}
            </ul>

        </div>
    )
}

export default App;
