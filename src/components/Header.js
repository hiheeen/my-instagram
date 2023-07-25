import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faPaperPlane,
    faPerson,
    faTruckPlane,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LiveChat from './LiveChat';
const HeaderContainer = styled.header`
    // position: fixed;
    // right: 0;
    // left: 0;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    padding: 15px 0;
    margin: 0 auto;
    max-width: 630px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const RightBox = styled.div`
    .font {
        margin-left: 8px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogOut = styled.div`
    all: unset;
    padding: 4px 4px;
    margin-left: 8px;
    border: 1px solid black;
    border-radius: 5px;
`;
function Header({ text, handleLogout }) {
    // const [state, setState] = useState(true);

    return (
        <div>
            <HeaderContainer>
                <Wrapper>
                    <Column>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </Column>
                    <Column>
                        <RightBox>
                            {/* <LiveChat /> */}
                            <FontAwesomeIcon
                                className="font"
                                icon={faHome}
                                size="1x"
                            />
                            <FontAwesomeIcon
                                className="font"
                                icon={faPaperPlane}
                                size="1x"
                            />
                            <FontAwesomeIcon
                                className="font"
                                icon={faUser}
                                size="1x"
                            />
                            <LogOut
                                style={{ cursor: 'pointer' }}
                                onClick={handleLogout}
                            >
                                Logout
                            </LogOut>
                        </RightBox>
                    </Column>
                </Wrapper>
            </HeaderContainer>
        </div>
    );
}
export default Header;
