import Link from "next/link";
import style from "./home.module.css";

console.log(style, 'Style')
// navbar
const Servics = () => {
  return (
    <div>
  <body className={(style.body)}>
     
    <div className={style.container}>

       {/* nav open */}
      <nav className={(style.navbar)}  >
  <div className={(style.navbar_brand)}>
   <h1 className={style.color1}>My_First <span className={style.color}>Website</span></h1>
  </div>
  <div className={(style.navbar_links)}>
      <ul>
        <li>
        <Link href="/hometb">
            <h1>Home</h1>
          </Link>
          </li>
        <li>
          <Link href="/aboutustb">
            <h1>About us</h1>
          </Link>
        </li>
        <li>
          <Link href="/servics">
        <h1>Servics</h1>
          </Link>
        </li>
        <li>
          <Link href="/contactustb">
        <h1>Contact us</h1>
          </Link>
        </li>
      </ul>
      </div>
      </nav>
      {/* nav closed */}
     </div>
     {/* <a className={style.btn} href="/services/nested">Click me</a> */}
     </body>
     </div>
  );
};
<br />
//slide section
const Write = () => {
  return(
<div>
  <h1 className={(style.h1)}>THIS IS SERVICS PAGE!</h1>
  <br />
  <br />
<Link className={style.btn} href="/servics/nested">Click me</Link>
</div>
  )
}

    


const App = () => {
  return (
    <div>
      < Servics/>
      <Write/>
    </div>
  );
};

export default App;

