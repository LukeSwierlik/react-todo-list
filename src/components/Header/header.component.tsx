import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent, HeaderLogo, HeaderWrapper, HeaderLink } from './header.style';

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <HeaderComponent>
            <div>
                <HeaderWrapper>
                    <HeaderLogo>
                        <Link to={'/'} />
                    </HeaderLogo>

                    <div>Search</div>

                    <nav>
                        <HeaderLink exact to={'/'} activeClassName={'active'}>
                            Home
                        </HeaderLink>
                        <HeaderLink exact to={'/info'} activeClassName={'active'}>
                            Info
                        </HeaderLink>
                        <HeaderLink exact to={'/faq'} activeClassName={'active'}>
                            FAQ
                        </HeaderLink>
                    </nav>
                </HeaderWrapper>
            </div>
        </HeaderComponent>
    );
};
