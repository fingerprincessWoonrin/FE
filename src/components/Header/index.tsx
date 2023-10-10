import * as I from '../../assets';
import * as S from './style';

const Header = () => {
    return (
        <>
            <S.Header>
                <S.LogoBox>
                    <I.Logo />
                </S.LogoBox>
                <S.HeaderLine />
                <S.UserName>
                    USER
                </S.UserName>
                <S.Date>
                    2023-08-01
                </S.Date>
                <S.CategoryBox>
                    <I.Category />
                </S.CategoryBox>
            </S.Header>
        </>
    );
};

export default Header;