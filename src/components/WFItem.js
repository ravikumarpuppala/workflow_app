import { useState } from 'react';

const WFItem = ({ workflow }) => {
    const CLASS_PREFIX = "wf-table-row wf-table-row-";
    const getRowClassName = status => CLASS_PREFIX + status.toLowerCase();
    const [id, setId] = useState(workflow.id);
    const [wfName, setWfName] = useState(workflow.wfName);
    const [status, setStatus] = useState(workflow.status);
    const [rowClassName, setRowClassName] = useState(getRowClassName(workflow.status));
    const wfStatusChangeHandler = (e) => {
        let newStatus = e.target.value;
        console.log(newStatus);
        setStatus(newStatus || 'Open');
        setRowClassName(getRowClassName(newStatus));
    }
    return (
        <li className={rowClassName} key={id}>
            <div className="wf-name">{wfName}</div>
            <select className="wf-status" defaultValue={status} onChange={wfStatusChangeHandler}>
                <option value="Open">Open</option>
                <option value="In-progress">In-progress</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
            </select>
        </li>
    )
}

export default WFItem