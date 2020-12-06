import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';
import { settings } from '../../styles/settings';

export const HeaderComponent = styled.div`
    background: ${darken(0.03, settings.colorDark)};
    padding: 25px;
`;

const activeClassName = 'active';

export const HeaderLink = styled(NavLink).attrs({ activeClassName })`
    color: ${settings.colorLight};
    text-decoration: none;
    font-weight: 700;
    margin-right: ${settings.baseSize};
    transition: ${settings.transition};

    &:hover {
        color: ${settings.colorSuccess};
    }

    &.${activeClassName} {
        color: ${settings.colorWaring};
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogo = styled.div`
    font-size: 24px;
`;
