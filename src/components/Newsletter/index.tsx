import { useForm, type SubmitHandler } from "react-hook-form";
import "./index.scss";
import type { NewsletterType } from "../../types/newsletter";

export default function Newsletter() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<NewsletterType>();

    const onSubmit: SubmitHandler<NewsletterType> = (data) => {
        console.log("Mensagem enviada com sucesso: ", data);

        reset();
    }

    return (
        <div className="newsletter">
            <div className="container-titulo">
                <h5>Inscreva-se na nossa newsletter</h5>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-inputs">
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        {...register("name", { required: "Nome obrigatório" })}
                    />
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        {...register("email", {
                        required: "E-mail obrigatório",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "E-mail inválido"
                        }
                        })}
                    />
                    <button type="submit" title="Inscrever">
                        INSCREVER
                    </button>
                </div>
                <div className="container-checkbox">
                        <input
                            type="checkbox"
                            {...register("terms", {
                            required: "Você precisa aceitar os termos"
                            })}
                        />
                    <span>Aceito os termos e condições</span>
                </div>
                <div className="errors">
                    {errors.name && <p>{errors.name.message}</p>}
                    {errors.email && <p>{errors.email.message}</p>}
                    {errors.terms && <p>{errors.terms.message}</p>}
                </div>
            </form>
        </div>
    )
}