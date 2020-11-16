import * as React from 'react';
import * as ReactDOM from "react-dom";
import axios from 'axios';
//import { type } from 'os';

type ItemProps = {
    items: [],
    loading: boolean;
}

type ItemState = {
    items: [],
    loading: boolean;
}

export default class Items extends React.Component<{}, ItemProps>  {

    state: ItemState = {
        items: [],
        loading: true
    };

    renderAllItemsTable(items: any) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item:any) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.completed ?  "yes": "no" }</td>
                                <td>{item.id}</td>
                                <td> - </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }

    componentDidMount() {
        this.populateItemsData();
    }

    populateItemsData() {
        console.log("fetch");
        axios.get("api/items").then(result => {
            const response = result.data;
            this.setState({ items: response, loading: false })
            console.log(this.state);
        })
    }

    public render() {

        let loading = <p><em>Loading...</em></p>;
        let content = this.state.loading ? (loading) : (
            this.renderAllItemsTable(this.state.items)
        );

        return (
            <div>
                <h1> Items </h1>
                <p> Here are your Items </p>
                {content}
            </div>  
        );
    }
}