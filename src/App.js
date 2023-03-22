import React, {useState} from 'react';
import { BinarySearchTree } from './components/binarytree.js'
//import './styles/App.css';

const bst = new BinarySearchTree();

function Tree(props) {
  const { data } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      if (key === 'left' && typeof value === 'object') {
        if (value !== null) {
          return (
            <li keys={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      } else if (key === 'right' && typeof value === 'object') {
        if (value !== null) {
          return (
            <li keys={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      }
    });
  }

  return data ? (
    <>
      <span className="tf-nc">{data.data}</span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    'EMPTY'
  );
}

function App() {
  const [number, setNumber] = React.useState(50);
  const [root, setRoot] = React.useState(null);

  React.useEffect(() => {
    bst.insert(50);
    bst.insert(45);
    bst.insert(55);
    bst.insert(53);
    bst.insert(54);
    bst.insert(51);
    bst.insert(40);
    bst.insert(48);
    bst.insert(60);
    bst.insert(30);
    bst.insert(80);
    bst.insert(10);
    bst.insert(42);
    bst.insert(32);
    bst.insert(58);
    setRoot((prev) => ({ ...prev, ...bst.root }));
  }, []);

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  function addNumber(e) {
    e.preventDefault();
    bst.insert(number);
    setRoot((prev) => ({ ...prev, ...bst.root }));
  }

  function removeNumber(e) {
    e.preventDefault();
    bst.remove(number);
    setRoot((prev) => ({ ...prev, ...bst.root }));
  }

  return (
    <div className="container">
      <h1>Бинарное дерево поиска</h1>
      <form className="form-control">
        <input type="number" min="1" onChange={changeNumber} required />
        <button onClick={addNumber} className="input-button">
          Добавить
        </button>
        <button onClick={removeNumber} className="input-button">
          Удалить
        </button>
      </form>
      <div className="tf-tree tf-custom">
        <ul>
          <li>
            <Tree data={root} parent={bst.root} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;