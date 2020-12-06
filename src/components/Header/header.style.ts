import styled from 'styled-components';

const settings = {
    colorLight: '#fff',
    colorDark: '#2f3542',
    colorSuccess: '#26de81',
    colorWaring: '#e1644e',
    fontText: "'Poppins', sans-serif",
    radius: '5px',
    baseSize: '12px',
    transition: 'all 0.5s',
};

export const HeaderComponent = styled.div`
    background: ${settings.colorLight}
    padding: 25px;
`;

export const HeaderLink = styled.a`
    color: red;
    text-decoration: none;
    font-weight: 700;
    margin-right: 20px;
`;
