const StyledElementOurCompany = styled.div\`test
background - color: #FFFFFF;
display: flex;
flex - direction: row;
justify - content: center;
width: 100 %;
 & .div {
 background - color: #FFFFFF;
 height: 1080px;
 overflow: hidden;
 position: relative;
 width: 1920px;
}
 & .image - replace - here {
 height: 541px;
 left: 1379px;
 position: absolute;
 top: 0;
 width: 541px;
}
 & .img {
 height: 539px;
 left: 838px;
 object - fit: cover;
 position: absolute;
 top: 541px;
 width: 541px;
}
 & .data - text {
 height: 541px;
 left: 1379px;
 position: absolute;
 top: 541px;
 width: 545px;
}
 & .overlap - group {
 background - color: #C1592E;
 height: 541px;
 position: relative;
 width: 541px;
}
 & .text - wrapper {
 color: #FFFFFF;
 font - family: "Inter-Regular", Helvetica;
 font - size: 32px;
 font - weight: 400;
 left: 97px;
 letter - spacing: 0;
 line - height: normal;
 position: absolute;
 top: 288px;
 width: 348px;
}
 & .text - wrapper - 2 {
 color: #FFFFFF;
 font - family: "Inter-Bold", Helvetica;
 font - size: 130px;
 font - weight: 700;
 left: 97px;
 letter - spacing: 0;
 line - height: normal;
 position: absolute;
 top: 110px;
}
 & .company - text {
 align - items: flex - start;
 display: inline - flex;
 flex - direction: column;
 gap: 32px;
 left: 100px;
 position: absolute;
 top: 100px;
}
 & .text - wrapper - 3 {
 color: #000000;
 font - family: "Red Hat Display-Bold", Helvetica;
 font - size: 96px;
 font - weight: 700;
 letter - spacing: 0;
 line - height: normal;
 margin - top: -1px;
 position: relative;
 width: fit - content;
}
 & .lorem - ipsum - dolor {
 color: #19363A;
 font - family: "Inter-Regular", Helvetica;
 font - size: 42px;
 font - weight: 400;
 letter - spacing: 0;
 line - height: normal;
 position: relative;
 width: 658px;
};`

export default ElementOurCompany = () => {
 return (
 <StyledElementOurCompany>
 <div className="div">
 <img className="image-replace-here" alt="Image replace here" src={image1} />
 <img className="img" alt="Image replace here" src={image2} />
 <div className="data-text">
 <div className="overlap-group">
 <p className="text-wrapper">{{mykey}}</p>
 <div className="text-wrapper-2">{{mykeyef}}</div>
 </div>
 </div>
 <div className="company-text">
 <div className="text-wrapper-3">Our Company</div>
 <p className="lorem-ipsum-dolor">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.Lorem
 ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit. Irem ipsum
 dolor sit amet, <br />
 <br />
 Sectetur adipiscing elit dolor sit amet, consectetur adipiscing elit.
 </p>
 </div>
 </div>
 </StyledElementOurCompany>
 );
};