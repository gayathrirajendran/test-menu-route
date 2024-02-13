import { Menu } from "primereact/menu";
import { MegaMenu } from "primereact/megamenu";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const items = [
  {
    id: "home",
    url: "/contact",
    label: "Test",
  },
  {
    id: "contact",
    url: "/sample2",
    label: "Test2",
  },
];

export const Sample = () => {
  const nav = useNavigate();
  useEffect(() => {
    console.log("first time");
  }, []);
  const items2 = items.map((item) => ({
    ...item,
    command: () => nav(item.url),
  }));
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

      <b>Menu</b>
      <Menu model={items2} />

      <br />
      <b>Mega</b>
      <MegaMenu orientation="vertical" model={items2} />
      <Outlet></Outlet>
    </>
  );
};
