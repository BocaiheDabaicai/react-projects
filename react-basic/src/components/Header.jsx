import reactLogo from "../assets/react.svg";

function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function Header() {
    const description = genRandomInt(0,9)

    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src='/vite.svg' className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
            <p>Random number : {description}</p>
        </div>
    )
}

export default Header