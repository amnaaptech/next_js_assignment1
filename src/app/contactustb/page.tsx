import exp from "constants";
import Link from "next/link";
import style from "./home.module.css";
import cssstyle from "./abc.module.css";

console.log(cssstyle, 'Style')

console.log(style, 'Style')

//navbar
const Navbar= () => {
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
       </body>
       </div>
  )

}
// contact us form
const Contact = () => {
    return (
        <div className={(cssstyle.container)}>
            <div className={(cssstyle.heading)}>Contact Us</div>
            <form action="" className={(cssstyle.form)}>
                <input className={(cssstyle.input)} type="text" id="text" placeholder="Full name" />
                <input className={(cssstyle.input)} type="email" id="email" placeholder="E-mail" />
                <input className={(cssstyle.input)} type="password" id="odd" placeholder="Password " />
                <input className={(cssstyle.input)} type="number" id="phone" placeholder="Phone Number" />
                <input className={(cssstyle.login_button)} type="submit" value="Submit" />

            </form>
        </div>
    )
}


const App = () => {
    return (
      <div>
        <Navbar/>
        <Contact/>
      </div>
    );
  };
  
  export default App;

