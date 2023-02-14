import { ListMovies } from "./components/ListMovies";
import { Search } from "./components/Search";
import { Create } from "./components/Create";

function App() {
  return (
    <div className="layout">

        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>MyMovies</h1>
        </header>

        {/*Barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}

        <section id= "content" className="content">
            {/*aqui el istado peliculas*/}
            <ListMovies></ListMovies>
        </section>

        <aside className="lateral">
            <Search></Search>
            <Create></Create>
        </aside>

        {/*Pie de pagina*/}
        <footer className="footer">
            &copy; MovieSearchEngine by Armando Rosas - <a href="https://www.linkedin.com/in/josearmandorosas/">Met the creator</a>
        </footer>
    </div>
  );
}

export default App;
