import { FlexContainer, LeftContainer, RightContainer } from "./Containers"
import { Logo } from "./Logo"
import { Menu } from "./Menu"
export const Header = () => {
    return(
        <FlexContainer>
            <LeftContainer>
            <Logo />
            </LeftContainer>
            <RightContainer>
                <Menu />
            </RightContainer>
        </FlexContainer>
    )
}