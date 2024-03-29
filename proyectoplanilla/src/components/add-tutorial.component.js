import React, {Component, component} from "react";


export default class Addtutorial extends Component {
    cosntructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            title: "",
            description: "",
            published: false,
            submitted: false,
        }
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value,
        });
    }

    saveTutorial() {
        let data = {
            title: this.state.title,
            description: this.state.description,
            published: false
        }

        TutorialDataService.create(data)
            .then(() => {
                console.log("Created new item succesfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) =>{
                console.log(e);
            });
    }

    newTutorial(){ 
        this.setState({
            title: "",
            description: "",
            published: false,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted succesfully!</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                            Add
                        </button>
                    </div>
                ): (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title" 
                            
                            />
                        </div>
                    </div>
                )}

        )
    }


}

