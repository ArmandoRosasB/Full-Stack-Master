
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

        <section className="content">
            {/*aqui van las peliculas*/}
            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo web</h3>
                <p className="description">Descripcion de la web</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

        </section>

        <aside className="lateral">
            <div className="search">
                <h3 className="title">Search</h3>
                <form action="">
                    <input type="text"/>
                    <button>Buscar</button>
                </form>
            </div>

            <div className="add">
                <h3 className="title">Add movie</h3>
                <form>
                    <input type="text" aria-placeholder="Title"/>
                    <textarea placeholder="Description"></textarea>
                    <input type="submit"/>
                </form>
            </div>
        </aside>

        {/*Pie de pagina*/}
        <footer className="footer">
            &copy; MovieSearchEngine by Armando Rosas - <a href="https://www.linkedin.com/in/josearmandorosas/">Met the creator</a>
        </footer>
    </div>
  );
}

export default App;
