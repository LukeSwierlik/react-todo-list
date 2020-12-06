import React, { FunctionComponent } from 'react';

interface MainLayout {
    children: React.ReactChildren;
}

export const MainLayoutContainer: FunctionComponent<MainLayout> = (props: MainLayout) => {
    return <>{props.children}</>;
};
