export const Experience = (props) => {    
    const {history} = props;
    console.log(history);
    return (
        <>
            <span>{history.university}</span>
            <span>{history.year}</span>
            <h3>{history.title}</h3>
            <p>{history.content}</p>
        </>
    )
}