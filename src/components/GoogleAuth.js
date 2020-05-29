import * as React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'864265665789-is3gmjrl9thu4ed5m3qkcted65d4jmbg.apps.googleusercontent.com',
                scope:'email'
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    };
};
export default GoogleAuth;