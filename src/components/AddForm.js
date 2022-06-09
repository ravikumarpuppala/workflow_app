import { useState } from 'react';

const AddForm = ({ classForAddForm, wfData, onSubmitForm }) => {

    const onBtnClick = e => {
        // TODO: validate form here...
    }

    const getUID = () => {
        let wfId = (Math.random() + '').replace(/0./, '');
        return wfId;
    }

    const getDefaultWfObj = () => {
        return {
            id: getUID(),
            wfName: '',
            status: 'Open'
        };
    }

    const [workflow, setWorkflow] = useState(getDefaultWfObj());

    const nameHandler = e => {
        const name = e.target.value;
        let updatedWorkflow = { ...workflow, wfName: name };
        setWorkflow(updatedWorkflow);
    }

    const statusHandler = e => {
        const status = e.target.value;
        let updatedWorkflow = { ...workflow, status };
        setWorkflow(updatedWorkflow);
    }

    const formSubmitHandler = e => {
        e.preventDefault();
        onSubmitForm(workflow);
        const defObj = getDefaultWfObj();
        setWorkflow(defObj);
    }

    return (
        <div className={classForAddForm + " wf-worflow-form-wrapper"}>
            <form className='wf-worflow-form' onSubmit={formSubmitHandler}>
                <div className='wf-worflow-form-control'>
                    <label>Enter workflow name:</label>
                    <input type="text" onChange={nameHandler} value={workflow.wfName} />
                </div>
                <div className='wf-worflow-form-control'>
                    <label>Enter workflow status:</label>
                    <select className="" value={workflow.status} onChange={statusHandler}>
                        <option value="Open">Open</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className='wf-worflow-form-control'>
                    <button className='wf-btn' onClick={onBtnClick}>Save workflow</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm