import styled from 'styled-components';
import Header from 'components/Header';
import {
    faCircle,
    faComment,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
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
    // align-items: center;
    justify-content: center;
    & > * {
        padding: 10px 0;
    }
`;
const ProfileImg = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    position: relative;
`;
const HeaderFollowInfo = styled.div`
    &:nth-of-type(2) {
        margin-left: 8px;
    }
`;
const InnerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;
const Icon = styled.div`
    font-size: 15px;
    display: flex;
    align-items: center;
    margin: 0 5px;
    svg {
        font-size: 12px;
        margin-right: 5px;
    }
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
                        <div style={{ display: 'flex' }}>
                            <HeaderFollowInfo className="headerFollowInfo">
                                3 followers
                            </HeaderFollowInfo>
                            <HeaderFollowInfo className="headerFollowInfo">
                                3 following
                            </HeaderFollowInfo>
                        </div>
                    </UserInfo>
                </HeaderContainer>
                <ContentContainer>
                    <ProfileImg bg="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7upb/image/v8L7ol-vzUGCUmgjpYZqsbximkA.jpg">
                        <InnerContainer>
                            <Icon>
                                <FontAwesomeIcon icon={faHeart} />
                                좋아요수
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faComment} />
                                리뷰수
                            </Icon>
                        </InnerContainer>
                    </ProfileImg>

                    <ProfileImg bg="https://t1.daumcdn.net/cfile/tistory/99A849395ABE28202B">
                        <InnerContainer>
                            <Icon>
                                <FontAwesomeIcon icon={faHeart} />
                                좋아요수
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faComment} />
                                리뷰수
                            </Icon>
                        </InnerContainer>
                    </ProfileImg>
                    <ProfileImg bg="https://i1.sndcdn.com/artworks-th9yy2JINBcdF8Il-AcZqQA-t500x500.jpg">
                        <InnerContainer>
                            <Icon>
                                <FontAwesomeIcon icon={faHeart} />
                                좋아요수
                            </Icon>
                            <Icon>
                                <FontAwesomeIcon icon={faComment} />
                                리뷰수
                            </Icon>
                        </InnerContainer>
                    </ProfileImg>
                </ContentContainer>
            </ProfileContainer>
        </div>
    );
}
export default Profile;
