import React from 'react';
import Footer from "./components/Home Page/Footer";
import './components/Home Page/ListOfProducts/index';
import './components/Home Page/ListOfProducts/ItemOfProducts/index';
import './components/Home Page/Footer/reset.scss';
import './components/Home Page/Footer/index.scss';
import ListOfProducts from "./components/Home Page/ListOfProducts";

function App() {
    const elements = [{
        class_name: "About-us",
        list : [
            'Contact', 'How to Purchase', 'Payment'
        ],
        header: "About"
    }, {
        class_name: "Follow-us",
        list : [
            'Facebook', 'Instagram', 'Pinterest'
        ],
        header: "Follow"
    } , {
        class_name: "Help",
        list : [
            'History', 'Policy', "Work with Us"
        ],
        header: "Help"
    }];

    // const pList = [['CONTACT', 'HOW TO PURCHASE', 'PAYMENT'], ['Facebook', 'instagram', "Pinterest"], ['History', 'Policy', "Work with US"]];

    return (
    <div>
        <Footer
            all={elements}
            class_name="footer"
        />
        <ListOfProducts/>
    </div>

    )
}

export default App;
