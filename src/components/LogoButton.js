import { Box, styled } from '@mui/material';
import NextLink from 'next/link';
import styles from "./LogoButton.module.css"



const InnerLogoLetterContainer = styled('div')(({theme})=>({
  fontSize:30,
  fontFamily:`'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
  color: "#CEC6C6",
  fontStyle:"italic"
}))

const LetterContainer = styled('div')(({theme})=>({
  width: 33,
    height: 33,
    border:`3px solid #8CBED6`,
    display: "flex",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    position: "relative"
}))


export default function LogoButton(){
    return <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} marginTop={1}>
        <NextLink href={"/"} style={{textDecoration:"none"}}><Box
          className={styles.container}  
        >
                <LetterContainer sx={{borderTopLeftRadius:15,borderBottomRightRadius:15}}>
                    <InnerLogoLetterContainer>
                        B
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        A
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        N
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        K
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        A
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        Y
                    </InnerLogoLetterContainer>
                </LetterContainer>
                <LetterContainer>
                    <InnerLogoLetterContainer>
                        0
                    </InnerLogoLetterContainer>
                </LetterContainer>
        </Box></NextLink>
        
        </Box>;
}
