import * as React from 'react';
import * as ReactDOM from "react-dom";
import axios from 'axios';
import { Redirect } from 'react-router';

type ItemProps = {
    name: string,
    description: string,
    history: Array<any>;

}

type ItemState = {
    name: string,
    description: string
}

export default class Create extends React.Component<{}, ItemProps> {
    constructor(props: ItemProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            history: []
        }

        
    }

    onChange = (e: any): void => {

        if (e.currentTarget.name === "name") {
            this.setState({
                ...this.state,
                name: (e.currentTarget.value)
            });
        }

        else if (e.currentTarget.name === "description") {
            this.setState({
                ...this.state,
                description: e.currentTarget.value
            });
        }

        console.log(this.state);
    };

    handleOnSubmit = (e: any): void => {

        let itemObject = {
            name: this.state.name,
            description: this.state.description
        }

        axios.post("api/items/create", itemObject).then(res => {
            console.log(res);
            debugger;
            this.state.history.push('/items');
            
        })

    }


    render() {

        if (this.state.history[0] === "/items") {
            return <Redirect to="/items" />
        }
        else {

            return (
                <div className="item-form" >
                    <h3>Add new trip</h3>
                    <form onSubmit={(e: any) => {
                        e.preventDefault();
                        const target = e.target as typeof e.target & {
                            name: { value: string };
                            description: { value: string };
                        };
                        const name = target.name.value;
                        const description = target.description.value;

                        this.handleOnSubmit(e);
                    }}>
                        <div className="form-group">
                            <label>Item name:  </label>
                            <input
                                type="name"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Item description: </label>
                            <textarea
                                name="description"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Add item" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            );
        }
    }
}