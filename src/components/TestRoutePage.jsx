const TestRoutePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://nika-gold-back-fe0ff35469d7.herokuapp.com/api/test")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network responce was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  <div>
    <h1>Test Route</h1>
    {error && <p style={{ color: "red" }}>Error: {error}</p>}
    {data ? <p>{data.message}</p> : <p>Loading data from backend...</p>}
  </div>;
};
export default TestRoutePage;
