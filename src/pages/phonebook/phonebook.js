import React, { Component } from 'react';
import { AddContactForm } from './addContactForm';
import { PhoneBookList } from './phonebooklist';

export default class PhoneBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        const { data } = this.props;
        this.setState({data: data});
    }

    handleSubmit(contact) {
        // this.props.data.push(contact);
        this.setState({data: [...this.state.data, contact]});
    }

    componentDidMount() {
        this.loadData();
        // setInterval(this.loadData, this.props.pollInterval);
    }

    render() {
        const { data } = this.state;
        console.log('SET STATE::::\n\n\n', data);
        return (
            <div className="phone-book">
                <h2>Phone Book</h2>
                <AddContactForm onContactSubmit={this.handleSubmit} />
                <PhoneBookList data={data} />
            </div>
        );
    }
}