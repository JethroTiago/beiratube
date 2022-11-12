import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    return (
        <StyledRegisterVideo>
            <button className="add-video">
                +
            </button>
            <form>
                <div>
                    <button className="close-modal">
                        X
                    </button>
                    <input placeholder="Título do vídeo"/>
                    <input placeholder="URL"/>
                    <button type="submit">
                        Cadastrar
                    </button> 
                </div>

            </form>
        </StyledRegisterVideo>
    )
}