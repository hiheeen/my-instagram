import styled from 'styled-components';
import Header from 'components/Header';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileImg1 from '../img/스크린샷 2023-07-20 143541.png';
import ProfileImg2 from '../img/스크린샷 2023-07-20 145138.png';
import ProfileImg3 from '../img/스크린샷 2023-07-20 145305.png';
import ProfileMainImg from '../img/스크린샷 2023-07-20 145402.png';
const ProfileContainer = styled.div`
    max-width: 630px;
    width: 100%;
    margin: 0 auto;
    height: 500px;

    margin-top: 25px;
`;
const HeaderContainer = styled.div`
    display: flex;
    margin: 0 auto 40px auto;
    // & > * {
    //     padding: 0 20px;
    // }
    border: 1px solid black;
`;
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 8px;
    margin: 0 auto;
    column-gap: 10px;
    width: 100%;
    max-width: 630px;
`;
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > * {
        padding: 10px 0;
    }
`;
const ProfileImg = styled.img`
    width: 100%;
    height: 300px;
`;
function Profile() {
    return (
        <div>
            <Header></Header>
            <ProfileContainer>
                <HeaderContainer>
                    <div style={{ padding: '0 100px' }} className="img">
                        <img
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                            }}
                            alt=""
                            src={ProfileMainImg}
                        />
                    </div>
                    <UserInfo className="info">
                        <div style={{ fontWeight: 700, fontSize: 20 }}>
                            heeen
                        </div>
                        <div>유저 정보</div>
                    </UserInfo>
                </HeaderContainer>
                <ContentContainer>
                    <ProfileImg alt="" src={ProfileImg1} />

                    <ProfileImg alt="" src={ProfileImg2} />
                    <ProfileImg alt="" src={ProfileImg3} />
                </ContentContainer>
            </ProfileContainer>
        </div>
    );
}
export default Profile;
