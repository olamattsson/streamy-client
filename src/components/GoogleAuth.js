import * as React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '774150418881-9jdni0nvn8o6r6dt9bns8jinjs760sqg.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
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