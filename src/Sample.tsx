import { Menu } from "primereact/menu"
import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"


const items = [{
    id: 'home',
    url: 'contact',
    label: 'Test'
  }, {
    id: 'contact',
    url: 'sample2',
    label: 'Test2'
  }]

export const Sample = () => {
    useEffect(() => {
        console.log('first time');
      }, [])
    return (
        <>
            <div>Sample</div>
            <>
                <ul>
                    <li>
                        <Link to="/contact">Test</Link>
                    </li>
                    <li>
                        <Link to="/sample2">Test2</Link>
                    </li>
                </ul>
            </>
            <Menu model={items} />
            <Outlet></Outlet>
        </>
    )
}
