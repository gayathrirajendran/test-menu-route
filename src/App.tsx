import './App.css';
import { Menu } from 'primereact/menu';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Sample } from './Sample';
import Test from './Test';
import Test2 from './Test2';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('first time');
  }, [])

  return (
    <>
      {/* <Menu model={items} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />}>
            <Route path="contact" element={<Test />}></Route>
            <Route path="sample2" element={<Test2 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
