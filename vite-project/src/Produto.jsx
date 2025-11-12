import { useState } from 'react';

export default function Produto(props) {
    const [quantidade, setQuantidade] = useState(0);

    return (
        <div>
            <h3>{props.nome}</h3>
            <p>Preço: R$ {props.preco}</p>
            <p>Quantidade no carrinho: <strong>{quantidade}</strong></p>
            <button onClick={() => setQuantidade(quantidade + 1)}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}