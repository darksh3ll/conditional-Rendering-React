import React, {Component} from 'react';

class ConditionButton1 extends Component {
    state= {
        mode:"view"
    }

    handleEdit = () => {
        console.log("edit");
    }
    handleSave = () => {
        console.log("Save");
    }
    render() {
        const view = this.state.mode === 'view';
        return (
            <div className="box">
                <button
                    onClick={
                        view
                            ? this.handleEdit
                            : this.handleSave
                    } >
                    {view ? 'Edit' : 'Save'}
                </button>
            </div>
        );
    }
}

export default ConditionButton1;