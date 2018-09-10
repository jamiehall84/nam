import React, { Component } from 'react';

export default class AddAsset extends Component{
    handleSubmit(){
        console.log('Form has been submited')
    }
    render(){
        return(
            <div>
                [ADD ASSET FORM HERE]
                <button onClick={this.handleSubmit}>ADD</button>
            </div>
        )
    }
}
