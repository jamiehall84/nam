import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '../actions';

class AddAsset extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            description:'',
            lat:'',
            long:'',
        }
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const {name, description, lat, long} = this .state;
        if(!name.trim() || !description.trim() || !lat.trim() || !long.trim()) {
            return;
        }
        let location = {'latitude': lat, 'longitude': long}
        this.props.dispatch(addAsset(name, description, location));
        this.setState({
            name:'',
            description:'',
            lat:'',
            long:'',
        })
    }

    render(){
    let {name, description, lat, long} = this.state;
    return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input name="name" value={name} placeholder='Name' onChange={this.handleChange.bind(this)} />
                <input name='description' value={description} placeholder='Description' onChange={this.handleChange.bind(this)} />
                <input name='lat' value={lat} placeholder='Latitude' onChange={this.handleChange.bind(this)} />
                <input name='long' value={long} placeholder='Longitude' onChange={this.handleChange.bind(this)} />
                <button type='submit'>
                    Add Asset
                </button>
            </form>
        </div>
    )
}
}
export default connect()(AddAsset)