import React from "react";
import './ItemOfProducts/index'
import ItemOfProducts from "./ItemOfProducts";


class ListOfProducts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            posts: [],
            users: []
        }
    }
    componentDidMount(){
        const  getData = async (options) =>{
            const url = options.url;
            const method = options.method;

            console.log('getData = ', url, method)

            await fetch(url)
                .then(result => result.json())
                .then(data => {
                    const obj = {};

                    obj[method] = data;

                    console.log('TEST TEST ', Object.assign(
                        {},
                        {
                            ...this.state,
                            isLoaded: true,
                        },
                        obj
                    ));

                    this.setState(Object.assign(
                        {},
                        {
                        ...this.state,
                        isLoaded: true,
                        },
                        obj
                    ))
                })
        };

        getData({url: "https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts", method: 'posts'});
        getData({url: "https://my-json-server.typicode.com/LeylaM97/json_placeholder/users", method: 'users'});
    }


    render() {
        // let all =[];
        // fetch("https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts")
        //     .then(response => response.json())
        //     .then(result=>{
        //         console.log(result);
        //         all = result;
        //         {
        //             all.map(each=>{
        //                 console.log(each.title);
        //                 return <ItemOfProducts
        //                     image={each.photos[0]}
        //                     title={each.title}
        //                     date={each.date}
        //                     // city={each.city}
        //                 />
        //             })
        //         }
        //         // {all = result.date };//baxarsan
        //     });
        return(
            <div className="products__container">



                {
                    this.state.isLoaded ? (
                        this.state.posts.map(post=>(
                        <ItemOfProducts
                        image={post.photos[0]}
                        title={post.title}
                        date={post.date}
                        />
                        // console.log(post.title)
                    ))): "loading..."}
                {/*{*/}
                {/*    this.state.isLoaded ? this.state.users.map(user=>(*/}
                {/*        <ItemOfProducts*/}
                {/*            city={user.city}*/}

                {/*        />*/}
                {/*        // console.log(post.title)*/}
                {/*    )) : "loading..."}*/}
            </div>
        )
    }
}

export default ListOfProducts;