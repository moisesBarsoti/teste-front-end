import "./index.scss";

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="container-titulo">
                <h5>Inscreva-se na nossa newsletter</h5>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
            </div>
            <form action="">
                <div className="container-inputs">
                    <input type="text" placeholder="Digite seu nome" />
                    <input type="text" placeholder="Digite seu e-mail" />
                    <button title="Inscrever">
                        INSCREVER
                    </button>
                </div>
                <div className="container-checkbox">
                    <input type="checkbox" />
                    <span>Aceito os termos e condições</span>
                </div>
            </form>
        </div>
    )
}