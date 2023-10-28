
import React from "react";

// class based component
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: { // state variables
              name: "Dummy",
              location: "Default",
              avatar_url: ""
            },
        };
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/nidhi0693-ui");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: nidhikmri93@gmail.com</h4>
            </div>
        )        
    }
}

export default UserClass;