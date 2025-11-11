import Header from './Header';
import Produto from './Produto';

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>Catálogo</h2>
        {/* Passando dados via PROPRIEDADES para reutilizar o mesmo componente */}
        <Produto nome="Camiseta Básica Preta" preco="49,90" />
        <Produto nome="Calça Jeans Slim" preco="129,90" />
        <Produto nome="Jaqueta Jeans" preco="199,90" />
      </main>
    </div>
  )
}