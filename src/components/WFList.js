import WFItem from './WFItem';

const WFList = ({ wfData }) => {
    return (
        <div className="wf-list-wrapper">
            <center className="wf-list-heading">Existing workflows({wfData.length})</center>
            <ul className="wf-list-ul">
                <li key={0} className="wf-list-table-header">
                    <div className="wf-name-heading wf-name">Name</div>
                    <div className="wf-status-heading wf-status">Status</div>
                </li>
                {wfData.map((wf) => {
                    return (
                        <WFItem key={wf.id} workflow={wf} />                        
                    )
                })}
            </ul>
        </div>
    )
}

export default WFList;