/// <reference types="react" />
import * as React from 'react';
export interface AnchorTheme {
    textDecoration?: 'underline' | 'none';
    color?: string;
    fontSize?: string;
}
export interface AnchorProps {
    id?: string;
    href: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    text?: string | number;
    theme?: {
        [anchor: string]: AnchorTheme;
    };
}
declare class Anchor extends React.PureComponent<AnchorProps, {}> {
    render(): JSX.Element;
}
export default Anchor;
