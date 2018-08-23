import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

// class Square extends React.Component {
//     render() {
//         return ( <
//             button className = "square" > { /* TODO */ } <
//             /button>
//         );
//     }
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square / > ;
//     }

//     render() {
//         const status = 'Next player: X';

//         return ( <
//             div >
//             <
//             div className = "status" > { status } <
//             /div>  <
//             div className = "board-row" > { this.renderSquare(0) } { this.renderSquare(1) } { this.renderSquare(2) } < /div>  <
//             div className = "board-row" > { this.renderSquare(3) } { this.renderSquare(4) } { this.renderSquare(5) } < /div>  <
//             div className = "board-row" > { this.renderSquare(6) } { this.renderSquare(7) } { this.renderSquare(8) } < /div>  <
//             /div>
//         );
//     }
// }

// class Game extends React.Component {
//     render() {
//         return ( <
//             div className = "game" >
//             <
//             div className = "game-board" >
//             <
//             Board / >
//             <
//             /div> <div className = "game-info" > <
//             div > { /* status */ } < /div>  <
//             ol > { /* TODO */ } < /ol> </div >
//             <
//             /div>
//         );
//     }
// }

// // ========================================

// ReactDOM.render( <
//     Game / > ,
//     document.getElementById('root')
// );

// class HelloWorld extends React.Component {
//     render() {
//         return ( <
//             h1 > Hello World! < /h1>
//         )
//     }
// };

// class HelloLife extends React.Component {
//     render() {
//         return ( <
//             HelloWorld / >
//         )
//     }
// };

// class Phrases extends React.Component {
//     render() {
//         return ( <
//             HelloLife / >
//         )
//     }
// }

// ReactDOM.render( <
//     Phrases / > , document.getElementById('root')
// );

class App extends React.Component {
    render() {
        return ( <
            div className = "notificationsFrame" >
            <
            div className = "panel" >
            <
            Header / >
            <
            Content / >
            <
            /div> < /
            div >
        )
    }
};

class Header extends React.Component {
    render() {
        return ( <
            div className = "header" >
            <
            div className = "fa fa-more" > < /div> <
            span className = "title" > Timeline < /span> <
            input type = "text"
            className = "searchInput"
            placeholder = "Search ..." / >
            <
            div className = "fa fa-search searchIcon" > < /div> < /
            div >
        )
    }
};

class Content extends React.Component {
    render() {
        return ( <
            div className = "content" >
            <
            div className = "line" > < /div> 

            <
            div className = "item" >
            <
            div className = "avatar" >
            <
            img alt = 'Doug'
            src = "http://www.croop.cl/UI/twitter/images/doug.jpg" / >
            Doug <
            /div> <
            span className = "time" >
            An hour ago <
            /span> <
            p > Ate lunch < /p> <
            div className = "commentCount" >
            2 <
            /div> < /
            div > { /* ... */ } <
            /div>
        )
    }
};

ReactDOM.render( <
    App / > , document.getElementById('root')
);