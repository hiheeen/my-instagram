import Header from './Header';
import styled from 'styled-components';
const Content = styled.div`
    max-width: 630px;
    width: 100%;

    margin: 25px auto 0 auto;
`;
const Wrapper = styled.div`
    height: ;
`;
function Layout({ children, handleLogout }) {
    //children은 layout이 최종 렌더링 되는 곳에서 layout의 하위 컴포넌트로 들어감
    //그게 layout으로 들어와서 content안의 children이 됨
    return (
        <>
            <Header handleLogout={handleLogout}></Header>
            <Content>{children}</Content>
            {/* children이 Home */}
        </>
    );
}
export default Layout;
