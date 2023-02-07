export const Menu = () => {
    const menyStyle = {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        justifyContent: 'space-around',
        minWidth: '300px',
    }
    return (
        <ul style={menyStyle}>
            <li>
                Home
            </li>
            <li>
                My Work
            </li>
            <li>
                Resume
            </li>
            <li>
                Contact
            </li>
        </ul>
    )
}