# Vanilla

With the ubiquity of frameworks, libraries, packages and other advanced tooling, it can be easy to forget what the current web is built on - a solid foundation of html, css and javascript inside a browser environment. Take this react component as an example:

```jsx
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter!</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase count
      </button>
    </div>
  );
};
```

This counter example is everywhere in the beginner React world - one of the simplest examples of learning how to manage state. But what's actually happening under the hood?

If this was the only thing you were trying to accomplish, React would be a dramatic overkill. But sometimes we get dependent on these tools. So for a fun challenge today, let's see if we can get back to basics.

## Technical Requirements

Implement the exact component above, but without any advanced tooling/

- Your solution should be a single HTML file (There is no need for any additional JS files).
- You should be able to open the html file in a browser directly and increase the count as normal.
- Browser APIs are ok (and required in this case)
