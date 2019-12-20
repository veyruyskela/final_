import React from "react";

class Footer extends React.Component{
    render() {
        const {all ,/*listOfparagraphs , */class_name} = this.props;
        // return(
        //     <div className={class_name}>
        //         <h2>HELP</h2>
        //         {/*<p>CONTACT</p>*/}
        //         {/*<p>HOW TO PURCHASE</p>*/}
        //         {/*<p>PAYMENT</p>*/}
        //         {/*<p>{listOfparagraphs}</p>*/}
        //         {
        //             console.log(listOfparagraphs)
        //         }
        //         {
        //             listOfparagraphs.map((tag, index)=>{ //niye forEach islemedi? //hemcinin index olmayanda niye xeta veriR?
        //                 // console.log(tag);
        //                     return <p key={index} className="footer-p">{tag}</p>
        //             })
        //         }
        //     </div>
        // )

        return(
            <div className="footer">
                {
                    all.map((item , index)=>{
                        return (
                            <div className="footer__item">
                                <a href={"#"} className="footer__item-header" onClick={handler} key={index}>{item.class_name}</a>
                                <ul className="footer__item-content "  key={index}>
                                    {
                                    item.list.map(listElem=>{
                                        return <li className="footer__content-text">{listElem}</li>
                                    })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
        function handler(e){
            e.preventDefault();
            console.log(e.target.parentNode.children[1]);
            e.target.parentNode.children[1].classList.toggle("active");//setActive === "" ? "active" : "");
        }
    }
}

export default Footer;