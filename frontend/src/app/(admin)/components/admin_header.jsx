import { Layout } from 'antd';
import { useRef } from 'react';

const { Header } = Layout;

const HeaderNav = ({ navFill, ...others }) => {
    const nodeRef = useRef(null);
    return <Header ref={nodeRef} {...others} />;
};

export default HeaderNav;