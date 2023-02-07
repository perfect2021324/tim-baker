import styled from "styled-components";
const Head = styled.span`
    font-size: 30px;
    font-weight: 700;
`
export const Logo = () => {
    const name = 'Me';
    return (
        <Head>{name}</Head>
    )
}