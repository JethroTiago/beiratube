import styled from "styled-components";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Search from "./components/Search";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .full-logo {
        display: flex;
        align-items: center;
        gap: .1rem;
  }
  .logo {
    width: 80%;
    max-width: 40px;
    @media (max-width: 670px) {
      max-width: 20px;
    }
    .text {
        color: ${({ theme }) => theme.textColorBase || "#222222"};
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: .2rem;
    }
  }
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
        return (
                <StyledMenu>
                        <div className="full-logo">
                                <Logo />
                                <h2 className="text">beira<strong>Tube</strong></h2>
                        </div>
                        <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                        <DarkModeSwitch />
                </StyledMenu>
        );
}

function Logo() {
  return (
        <img className="logo" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png" />
  )
}