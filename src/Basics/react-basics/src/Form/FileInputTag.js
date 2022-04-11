import React, { Component } from 'react';

class FileInputTag extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.fileInput=React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.fileInput.current.files[0].name);
        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select the File:
                    <input type="file" ref={this.fileInput} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default FileInputTag;