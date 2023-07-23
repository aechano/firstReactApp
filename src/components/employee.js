function Employee (props) {
    return (
        <>
            <h3 className="text-3xl font-bold underline">Hello {props.name}!</h3>
            {/* <p>{props.role ? props.role : "No Role"}</p> */}
            {props.role ? <p>{props.role}</p> : <p>No role</p>}
        </>
    );
    
    
}

export default Employee; 