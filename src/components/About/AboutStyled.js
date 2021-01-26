import styled from 'styled-components'

export const InfoContainer =styled.div`

 color :#fff;
 background: ${({lightBg}) =>(lightBg ? '#0de1b0' :'#010606')};
  
 @media screen and (max-width :768px){

    padding :100px 0;

 }

 
`;

export const InfoWrapper =styled.div`
  display :grid;
  z-index :1;
  height :850px;
  width :100%;
  max-width : 1100px;
  margin-right :auto;
  margin-left :auto;
  padding :0 0px;
  justify-content :center;

  

`;

export const InfoRow =styled.div`

display : grid;
grid-auto-columns :minmax(auto ,1fr);
align-items :center;
grid-template-areas :${({imgStart}) =>(imgStart ? `'col2 col1'`:`'col1 col2'`)};


@media screen and (max-width :768px){

grid-template-areas :${({imgStart}) =>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
 }

`;

export const Column1=styled.div`
 margin-bottom :15px;
 padding :0 15 px;
 grid-area :col1;

`;


export const Column2=styled.div`
 margin-bottom :15px;
 padding :0 15px;
 grid-area :col2;

`;


export const TextWrapper =styled.div`
max-width :540px;
padding-top:0;
padding-bottom :10px;
padding-left :24px;
padding-right :10px;

`;


export const TopLine =styled.p`
 text-transform :uppercase;
 color :${({headingcolor}) => (headingcolor ? '#01bf71': '#dddfe4')};
 font-size :16px;
 line-height :16px;
 font-weight :700;
 letter-spacing :1.4px;
 text-transform:uppercase;
 margin-bottom :16px;
`;

export const Heading =styled.h1`
 text-transform :uppercase;
 margin-bottom :24px;
 font-size :40px;
 
 line-height :1.1;
 font-weight :600;
 color :${({lightText}) =>(lightText ? '#f7f8fa' :'#010606')};

  @media screen and (max-width :480px)
  {
      font-size :25px;
  }
 

`;

export const Subtitle =styled.p`
 max-width :440px;
 margin-bottom:35px;
 font-size :18px;
 line-height :24px;
 color : ${({darkText}) =>(darkText ? '#010606': '#fff')};


`;


export const ImgWrap =styled.div`
   max-width:500px;
   height: 100%;

`;

export const Img=styled.img`
 width :85%;
 margin :0 0 10px 0;
 padding-right :0;
 display :none;
 height: 100%;
 @media screen and (max-width :500px)
  {
      display:block;
  }
`;

export const EventSwrapper=styled.div`

display :${({eventSwapper}) =>(eventSwapper ? true :false)};

`;



