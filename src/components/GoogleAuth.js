import * as React from 'react';

class GoogleAuth extends React.Component {
    state = {isIgnedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '864265665789-is3gmjrl9thu4ed5m3qkcted65d4jmbg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

    renderAuthButton() {
        if (this.state.isIgnedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isIgnedIn) {
            return <div>We are signed in</div>
        }
        return <div>We are not signed in</div>
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
};
export default GoogleAuth;