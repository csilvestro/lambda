const UploadForm = () => {
    return (
        <form style={styles.form}>
            <h5> Upload a celebrity photo</h5>
            <input type="file" name="filename" />
            <button type="submit">upload</button>
        </form>
    )
}
export default UploadForm;

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        backgroundColor: 'lightgray',
        padding: '2%'
    }
};