import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm() {
    const [values, setValues] = React.useState({ titulo: "", url: "" });

    return {
        values,
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm();
    const [formVisivel, setFormVisivel] = React.useState(true);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Título do vídeo"
                                value={formCadastro.values.titulo}
                                onChange={(evento) => {
                                    const value = evento.target.value;
                                    console.log(value);
                                    setValues({
                                        ...values,
                                        titulo: value,
                                    });
                                }}
                            />
                            <input 
                                placeholder="URL"
                                value={formCadastro.values.url}
                                onChange={(evento) => {
                                    const value = evento.target.value;
                                    console.log(value);
                                    setValues({
                                        ...values,
                                        url: value,
                                    });
                                }}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}