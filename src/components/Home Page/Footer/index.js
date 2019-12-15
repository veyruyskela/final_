import React from "react";

/// >> ??? burda h2 ve p elementleri olan dive nece classname elave edim _:(

class Footer extends React.Component{
    render() {
        const {listOfparagraphs , class_name} = this.props;
        return(
            <div className={class_name}>
                <h2>HELP</h2>
                {/*<p>CONTACT</p>*/}
                {/*<p>HOW TO PURCHASE</p>*/}
                {/*<p>PAYMENT</p>*/}
                {/*<p>{listOfparagraphs}</p>*/}
                {
                    console.log(listOfparagraphs)
                }
                {
                    listOfparagraphs.map((tag, index)=>{ //niye forEach islemedi? //hemcinin index olmayanda niye xeta veriR?
                        // console.log(tag);
                            return <p key={index} className="footer-p">{tag}</p>
                    })
                }
            </div>
        )
    }
}

export default Footer;