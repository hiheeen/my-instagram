import styled from 'styled-components';

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 10px;
    & > * {
        padding: 4px 0;
    }
`;
function Comments({ reviews, author }) {
    return (
        <div>
            <ReviewContainer>
                <div>
                    <span>{author}</span>
                    <span>{reviews}</span>
                </div>
            </ReviewContainer>
        </div>
    );
}
export default Comments;
