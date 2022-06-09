const navLinks = [{
    "id": 1,
    "href": "/",
    "label": "Home"
}, {
    "id": 2,
    "href": "/contactus",
    "label": "Contact us"
}, {
    "id": 3,
    "href": "/aboutus",
    "label": "About us"
}];

const userName = 'Ravi';

const wfData = [{
    "id": 1,
    "wfName": "Test workflow 1",
    "status": "Pending"
}, {
    "id": 2,
    "wfName": "Test workflow 2",
    "status": "Approved"
}, {
    "id": 3,
    "wfName": "Test workflow 3",
    "status": "In-progress"
}, {
    "id": 4,
    "wfName": "Test workflow 4",
    "status": "Open"
}];

const MockData = {
    navLinks,
    userName,
    wfData
};

export default MockData;