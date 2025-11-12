import Header from './Header';
import Produto from './Produto';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Catálogo</h2>
        {}
        <Produto nome="Camiseta Básica Preta" preco="49,90" />
        <Produto nome="Calça Jeans Slim" preco="129,90" />
        <Produto nome="Jaqueta Jeans" preco="199,90" />
      </main>
    </div>
  )
}