import styled from "styled-components";

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
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg className="logo" width="164.000000pt" height="53.000000pt" viewBox="0 0 164.000000 53.000000" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fefefe" stroke="none">
        <path d="M0 265 l0 -265 820 0 820 0 0 265 0 265 -820 0 -820 0 0 -265z m487
102 l18 -18 0 -68 0 -69 -19 -21 -19 -21 -121 0 -121 1 -18 14 -19 13 -5 41
c-3 22 -2 60 1 85 l7 46 32 9 c18 6 80 9 139 8 l107 -2 18 -18z m73 -22 l0
-35 30 0 29 0 11 -19 c5 -11 10 -32 10 -46 0 -14 -5 -35 -10 -46 l-11 -19 -39
0 -40 0 0 100 0 100 10 0 c6 0 10 -16 10 -35z m810 0 l0 -35 30 0 29 0 11 -19
c5 -11 10 -30 10 -43 0 -13 -7 -34 -16 -46 l-15 -22 -40 0 -39 0 0 100 0 100
15 0 15 0 0 -35z m-180 5 c0 -5 -9 -10 -20 -10 l-20 0 0 -80 0 -80 -15 0 -15
0 0 80 0 80 -20 0 c-11 0 -20 5 -20 10 l0 10 55 0 55 0 0 -10z m-430 -59 c5
-11 10 -27 10 -35 l0 -16 -40 0 -40 0 0 -14 c0 -7 6 -19 14 -25 l14 -12 28 7
27 7 -7 -12 c-4 -6 -19 -11 -33 -11 -15 0 -35 7 -45 17 l-18 16 0 30 c0 17 7
39 17 49 9 10 26 18 39 18 l23 0 11 -19z m80 -46 l0 -65 -15 0 -15 0 0 65 0
65 15 0 15 0 0 -65z m100 55 c0 -4 -9 -10 -20 -13 l-20 -5 0 -51 0 -51 -10 0
-10 0 0 63 0 62 30 1 c17 1 30 -2 30 -6z m98 -2 l12 -12 0 -53 0 -52 -14 5
-13 5 5 25 4 24 -10 0 c-6 0 -17 -3 -26 -6 -9 -3 -16 -14 -16 -24 0 -10 8 -21
18 -24 l17 -5 -25 2 -25 2 0 20 0 20 32 15 33 15 0 19 0 18 -30 -4 c-16 -3
-30 -2 -30 2 0 4 3 10 7 13 3 4 16 7 28 7 11 0 26 -5 33 -12z m192 -43 l0 -55
25 0 25 0 0 55 0 55 10 0 10 0 0 -62 0 -63 -40 -2 -41 -3 -9 26 c-6 14 -10 43
-10 65 l0 39 15 0 15 0 0 -55z m332 38 c10 -9 18 -24 18 -35 l0 -18 -40 0 -40
0 0 -14 c0 -7 7 -19 15 -26 l14 -12 22 7 22 7 -7 -11 c-4 -6 -18 -11 -31 -11
-13 0 -31 7 -39 16 l-16 15 0 34 0 34 16 15 c8 9 23 16 31 16 9 0 25 -7 35
-17z" />
        <path d="M300 280 l0 -50 16 0 c9 0 29 8 45 17 16 10 29 24 29 33 0 8 -14 23
-31 33 -17 9 -37 17 -45 17 l-14 0 0 -50z" />
        <path d="M567 284 c-4 -4 -7 -25 -7 -46 l0 -39 15 -5 c8 -4 22 0 31 7 l15 12
-3 36 -3 36 -20 3 c-12 2 -24 0 -28 -4z" />
        <path d="M1372 243 l3 -48 17 -3 18 -3 11 25 12 25 -7 25 -6 26 -26 0 -25 0 3
-47z" />
        <path d="M707 294 c-4 -4 -7 -13 -7 -21 l0 -13 26 0 25 0 -3 17 c-2 10 -10 19
-19 21 -8 1 -18 0 -22 -4z" />
        <path d="M1517 294 c-4 -4 -7 -13 -7 -21 l0 -13 26 0 25 0 -3 17 c-2 10 -10
19 -19 21 -8 1 -18 0 -22 -4z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#030303" stroke="none">
        <path d="M530 280 l0 -110 33 -1 c17 -1 39 -1 47 1 8 1 21 9 28 18 6 9 12 33
12 55 0 21 -5 47 -10 58 l-11 19 -29 0 -30 0 0 35 0 35 -20 0 -20 0 0 -110z
m78 -29 c2 -12 -2 -29 -8 -36 -7 -8 -16 -12 -21 -9 -5 3 -9 18 -9 33 0 15 3
31 7 35 4 3 12 5 17 3 6 -2 12 -14 14 -26z" />
        <path d="M802 381 c-8 -5 -12 -17 -10 -27 l3 -19 25 0 25 0 3 19 c2 10 -2 22
-10 27 -7 5 -15 9 -18 9 -3 0 -11 -4 -18 -9z" />
        <path d="M1330 280 l0 -110 24 0 c13 0 31 -3 40 -6 l15 -6 26 26 25 25 0 36
c0 20 -5 45 -10 56 l-11 19 -29 0 -30 0 0 35 0 35 -25 0 -25 0 0 -110z m85
-20 c3 -10 1 -29 -5 -40 -6 -11 -15 -18 -21 -15 -5 4 -9 22 -9 41 l0 34 14 0
c8 0 17 -9 21 -20z" />
        <path d="M1070 350 l0 -20 20 0 20 0 0 -80 0 -80 25 0 25 0 0 80 0 80 20 0 20
0 0 20 0 20 -65 0 -65 0 0 -20z" />
        <path d="M677 302 l-17 -19 0 -40 0 -40 20 -18 20 -18 30 1 c16 0 34 3 40 7 5
3 10 13 10 22 l0 15 -30 -4 -30 -5 -11 14 -11 13 41 0 41 0 0 26 c0 14 -5 34
-10 45 l-11 19 -33 0 -33 0 -16 -18z" />
        <path d="M800 245 l0 -75 25 0 25 0 0 75 0 75 -25 0 -25 0 0 -75z" />
        <path d="M870 244 l0 -74 20 0 20 0 0 50 0 51 23 8 22 8 6 -9 6 -9 26 7 27 6
0 -8 c0 -5 -15 -16 -33 -24 l-32 -15 -3 -27 -3 -27 21 -11 20 -11 17 9 c9 5
24 7 34 5 l19 -5 0 64 0 64 -12 12 c-7 7 -26 12 -43 12 -17 0 -36 -5 -43 -12
l-12 -12 0 11 0 12 -40 -1 -40 0 0 -74z" />
        <path d="M1192 254 l4 -66 19 -14 19 -14 16 6 c8 4 25 6 38 5 l22 -1 0 75 0
75 -20 0 -20 0 0 -55 0 -55 -15 0 -15 0 0 55 0 55 -26 0 -26 0 4 -66z" />
        <path d="M1486 304 l-16 -15 0 -42 c0 -23 4 -47 8 -53 4 -6 17 -16 29 -22 l21
-12 31 11 c17 6 31 14 31 18 0 4 -5 12 -12 19 l-11 11 -17 -9 -18 -10 -12 15
-12 15 41 0 41 0 0 28 0 29 -18 16 c-10 10 -30 17 -45 17 -14 0 -33 -7 -41
-16z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
        <path d="M213 389 l-32 -9 -7 -46 c-3 -25 -4 -68 -2 -95 l5 -50 19 -14 19 -14
131 -1 131 0 19 21 19 21 0 79 0 78 -18 18 -18 18 -117 2 c-64 1 -131 -2 -149
-8z m140 -88 c15 -8 27 -17 27 -20 0 -4 -13 -14 -29 -24 -16 -9 -32 -17 -35
-17 -3 0 -6 18 -6 41 0 22 3 39 8 37 4 -2 19 -10 35 -17z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#bfbfbf" stroke="none">
        <path d="M1332 278 l2 -113 3 108 4 107 14 0 15 0 0 -41 c0 -22 4 -38 8 -35 4
2 6 23 4 45 l-4 41 -24 0 -24 0 2 -112z" />
        <path d="M1108 278 c1 -35 4 -74 6 -88 2 -14 4 14 5 63 0 48 -2 87 -6 87 -5 0
-7 -28 -5 -62z" />
        <path d="M1151 253 c1 -49 3 -77 5 -63 2 14 5 53 6 88 2 34 0 62 -4 62 -5 0
-7 -39 -7 -87z" />
        <path d="M962 307 l-11 -13 8 -13 9 -13 28 11 29 10 -25 0 c-14 -1 -29 -1 -35
0 -5 1 -3 5 5 11 8 5 12 12 9 15 -4 3 -11 0 -17 -8z" />
        <path d="M1191 263 c1 -32 3 -51 5 -43 1 8 4 34 6 58 2 23 0 42 -4 42 -5 0 -7
-26 -7 -57z" />
        <path d="M1228 260 l4 -60 16 1 17 1 -12 5 -13 5 0 54 c0 30 -3 54 -7 54 -5 0
-6 -27 -5 -60z" />
        <path d="M1377 283 c-4 -3 -7 -24 -7 -45 0 -21 3 -38 8 -38 4 0 6 18 4 39 l-4
39 19 5 18 5 -16 1 c-9 0 -19 -2 -22 -6z" />
        <path d="M1507 283 c-4 -3 -7 -10 -7 -15 0 -4 14 -8 30 -8 17 0 30 4 30 9 0 5
-10 7 -22 3 l-21 -5 7 11 c4 7 3 12 -2 12 -5 0 -12 -3 -15 -7z" />
        <path d="M732 243 l-44 -4 6 -15 c3 -9 6 -18 6 -20 0 -2 5 -4 11 -4 l11 0 -12
15 -12 15 41 0 41 0 0 10 c0 6 -1 9 -2 8 -2 -1 -23 -3 -46 -5z" />
        <path d="M1543 243 c-24 -2 -43 -7 -43 -11 0 -4 20 -6 45 -4 25 2 45 8 45 13
0 5 -1 8 -2 7 -2 -1 -22 -3 -45 -5z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#808080" stroke="none">
        <path d="M560 347 c0 -26 4 -47 9 -47 l9 0 -5 43 c-3 23 -7 44 -9 46 -2 2 -4
-17 -4 -42z" />
        <path d="M1070 363 c0 -5 29 -8 65 -8 36 0 65 3 65 8 0 4 -29 7 -65 7 -36 0
-65 -3 -65 -7z" />
        <path d="M838 268 c1 -29 4 -64 6 -78 2 -14 4 10 5 53 0 42 -2 77 -6 77 -5 0
-7 -24 -5 -52z" />
        <path d="M1271 263 c1 -32 3 -51 5 -43 1 8 4 34 6 58 2 23 0 42 -4 42 -5 0 -7
-26 -7 -57z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#404040" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#f3eeee" stroke="none">
        <path d="M176 210 c4 -14 14 -30 23 -37 9 -7 23 -12 31 -12 l15 0 -24 13 c-13
7 -30 24 -38 37 l-14 24 7 -25z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#111111" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fe1515" stroke="none">
        <path d="M300 280 c0 -27 3 -50 8 -50 4 0 7 23 7 50 0 28 -3 50 -7 50 -5 0 -8
-22 -8 -50z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fe7f7f" stroke="none">
        <path d="M308 393 c23 -2 59 -2 80 0 20 2 1 4 -43 4 -44 0 -61 -2 -37 -4z" />
      </g>
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#303030" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#606060" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#707070" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#cfcfcf" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#505050" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#dfdfdf" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fec3c3" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#9f9f9f" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#212121" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fe9f9f" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#8f8f8f" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fe5656" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fed8d8" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#afafaf" stroke="none" />
      <g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)" fill="#fe2f2f" stroke="none" />
    </svg>
  )
}