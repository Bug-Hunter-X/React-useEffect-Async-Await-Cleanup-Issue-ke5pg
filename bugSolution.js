```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component unmount
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      if(isMounted) {
        // ... process data ...
      }
    }

    fetchData();
    return () => {
      isMounted = false; // Cleanup function to cancel/ignore data if unmounted
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```