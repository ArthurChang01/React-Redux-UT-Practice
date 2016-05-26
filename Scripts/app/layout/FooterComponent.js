import * as React from 'react';

export default class FooterComponent extends React.Component {
    render() {
        return <footer id="footer">
            <div className="copyright">
                &copy; Arthur.Design: <a href="https://github.com/ArthurChang01/React-Redux-Practice">Arthur GitHub</a>.
            </div>
        </footer>;
    }
}