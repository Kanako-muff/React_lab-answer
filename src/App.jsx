import Lab1ForwardRef from './components/Lab1ForwardRef';
import { Person } from './components/Person';
import { ClickCounter } from './components/ClickCounter';
import { Lab2ErrorBoundary } from './components/Lab2ErrorBoundary';
import { Lab3PureComponent } from './components/Lab3PureComponent';
import Lab4CompoundComponent from './components/Lab4CompoundComponent';

const App = () => {
  // for Lab2
  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  }

  // for Lab3
  const items = ['item1', 'item2', 'item3'];

  return (
    <>
      <h2>Lab1</h2>
      <Lab1ForwardRef />

      <hr />

      <h2>Lab2</h2>
      <Lab2ErrorBoundary>
        <Person person={person} />
        {/* ▼▼ ERROR ▼▼ */}
        <Person person={{}} />
        {/* ▲▲ ERROR ▲▲ */}
        <ClickCounter />
      </Lab2ErrorBoundary>

      <hr />

      <h2>Lab3</h2>
      <h2>List of Items:</h2>
      <Lab3PureComponent items={items} />

      <hr />

      <h2>Lab4</h2>
      <Lab4CompoundComponent />
    </>
  )
}

export default App;