import { useState } from 'react';
import WFList from './WFList';
import AddForm from './AddForm';

const Body = ({ wfData }) => {
    const DEFAULT_HIDDEN_CLASSNAME = 'wf-hidden';
    const [btnType, setBtnType] = ('add');
    const [workflowData, setWorkflowData] = useState(wfData);
    const [classForAddForm, setClassForAddForm] = useState(DEFAULT_HIDDEN_CLASSNAME);
    const addFormToggle = (e) => {
        let newClass = !!classForAddForm ? '' : DEFAULT_HIDDEN_CLASSNAME;
        setClassForAddForm(newClass);
    }
    const onSubmitForm = (obj) => {
        setWorkflowData([...workflowData, obj]);
    }
    return (
        <div className="wf-body-wrapper">
            <div className='wf-add-wf-btn-wrapper'>
                <button onClick={addFormToggle} className='wf-btn wf-add-wf-btn'>
                    {classForAddForm.length ? "Add workflow" : "Hide workflow"}
                </button>
            </div>
            <AddForm classForAddForm={classForAddForm} onSubmitForm={onSubmitForm}/>
            <WFList wfData={workflowData} />
        </div>
    )
}

export default Body;