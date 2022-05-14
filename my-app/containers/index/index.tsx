import { useState } from 'react'
import ButtonFromProps from '../../components/button'
import { StyledHome } from "./styles";

const HomeContainer : React.FC = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const [data, setData] = useState({name: '', avatar: ''});
    const randomNum = Math.floor(Math.random() * 898 ) + 1;

    const fetchPokemon = async () => {
        fetch(url+randomNum)
            .then((res) => {
                if (res.status == 200) return res.json();
            })
            .then((res) => {
                setData({...data, name: res.forms[0].name, avatar: res.sprites.front_default})
            });
    }

    return (
        <StyledHome>
            <main className="main">
                {data.name != '' && <div>
                    <p className="title">Gotcha!<br />You caught <b>{data.name}</b></p>
                    <img src={data.avatar} alt={data.name} className="image" />
                </div>}

                <ButtonFromProps text='Catch a Pokémon' onClick={fetchPokemon}/>
            </main>
        </StyledHome>
    )
}

export default HomeContainer;