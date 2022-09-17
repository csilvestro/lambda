const Header = () => {
    return (
        <header style={styles.header}>Celeb App </header>
    )
}
export default Header;

const styles= {
    header: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'red',
        color: 'white',
        padding: '2%',
        textAlign: 'center',
        fontSize: '1em',
        fontWeight: 'bold'
    }
};