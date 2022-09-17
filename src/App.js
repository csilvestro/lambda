import Header from './components/Header';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div>
      <Header  />
      <section style={styles.section}>
        <UploadForm  />
      </section>
    </div>
  );
}

export default App;

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2%'
  }
};
