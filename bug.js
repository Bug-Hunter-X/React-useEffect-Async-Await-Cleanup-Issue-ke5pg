```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using async/await inside useEffect without a return function
    async function fetchData() {
      const response = await fetch('/api/data');
      const data = await response.json();
      // ... process data ...
    }

    fetchData();
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```