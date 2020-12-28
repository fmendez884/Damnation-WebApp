import * as React from 'react';
import * as ReactDOM from "react-dom";
import axios from 'axios';

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
                        <th>Score</th>
                        <th>Remaining Health</th>
                        <th>Time Elapsed</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item: any) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.score}</td>
                                <td>{item.remainingHealth}</td>
                                <td>{item.timeElapsed}</td>
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
        axios.get("api/leaderboards").then(result => {
            const response = result.data;
            this.setState({ items: response, loading: false })
        })
    }

    public render() {

        let loading = <p><em>Loading...</em></p>;
        let content = this.state.loading ? (loading) : (
            this.renderAllItemsTable(this.state.items)
        );

        return (
            <div>
                <h1> Leader Boards </h1>
                <p> Current Rankings: </p>
                {content}
            </div>
        );
    }
}