interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
   <div>
    <Button title="Teste"/>
    <Button title="Ação" />
    </div>
  )
}

export default App
