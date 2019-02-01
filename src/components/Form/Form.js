import React, { Component } from 'react';
import './Form.css';
import Message from '../Message/Message';
import firebase from 'firebase';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Sebastian',
            message: '',
            list: [],
        };
        this.messageRef = firebase.database().ref().child('messages');
        this.listenMessages();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.user) {
            this.setState({'userName': nextProps.user.displayName});
        }
    }
    handleChange(event) {
        this.setState({message: event.target.value});
    }
    handleSend() {
        if (this.state.message) {
            var newItem = {
                userName: this.state.userName,
                message: this.state.message,
            }
            this.messageRef.push(newItem);
            this.setState({ message: '' });
        }
    }

    loadfile(event){
        if(event.target.files[0]) {
            const file = event.target.files[0];
            //const reader = new FileReader();
            // TODO : check si c'est une image
            let img = new Image;
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                let canvas = this.$refs['imgCanvas']
                let ctx = canvas.getContext('2d')
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 200, 100)
                canvas.toBlob(blob => {
                    // inject into storage then send msg
                    firebase.storage().ref('images/').child(file.name)
                        .put(blob)
                        .then(snapshot => {
                            snapshot.ref.getDownloadURL()
                                .then(downloadURL => {
                                    this.message = "![prout](" + downloadURL + ")"
                                    this.tamerelapute()
                                    // TODO : cleanup canvas && fileinput
                                });
                        })
                }, 'image/webp', 0.8)
            };
        }
    }
    handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
    }
    listenMessages() {
        this.messageRef
            .limitToLast(10)
            .on('value', message => {
                this.setState({
                    list: Object.values(message.val()),
                });
            });
    }
    render() {
        return (
            <div className="form">
                <div className="form__message">
                    { this.state.list.map((item, index) =>
                        <Message key={index} message={item} />
                    )}
                </div>

                <div className="form__row">
                    <input
                        type="file"
                        ref="fileInput"

                    >
                    </input>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Type message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    <button
                        className="form__button"
                        onClick={this.handleSend.bind(this)}
                    >
                        send
                    </button>

                </div>
            </div>
        );
    }
}