import React from 'react';
import Footer from "./components/Home Page/Footer";
import './components/Home Page/Footer/index.css'

function App() {
    const pList = [['CONTACT', 'HOW TO PURCHASE', 'PAYMENT'], ['Facebook', 'instagram', "Pinterest"], ['History', 'Policy', "Work with US"]];
    return (
        <div className="footer">
            {
                pList.map((p) => {
                    console.log(p);
                    return <Footer
                        listOfparagraphs={p}
                    />
                })
            }
        </div>
    )
}

export default App;
