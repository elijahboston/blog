---
date: '2019-08-27'
title: 'Async Functions with useEffect'
tags: react | async
description: In this post we'll explore how asynchronous functions can be used correctly within functional React components.
---

In this post we'll explore how asynchronous functions can be used correctly within functional React components. The first thing we'll reach for is the `useEffect` hook since that's triggered after the component is initially rendered, or when certain properties change. The signature looks like this:

```javascript
useEffect(() => { ... })
```

How would we use async functions here? It's tempting to just make the inner function asynchronous:

```javascript
// INCORRECT
useEffect(async () => {
  // ...
  await something
})
```

React will yell at you if you try this though. `useEffect` _must be a synchronous function_, but there's nothing stopping us from _creating an asynchronous function inside of it_.

```javascript
// Almost there...
useEffect(() => {
  const loadData = async () => {
    await fetchData()
  }
})
```

The major difference between this use of `async` and what we're normally accustomed to is that we won't `await` the asynchronous function.

```javascript
// CORRECT
useEffect(() => {
  const loadData = async () => {
    await fetchData()
  }

  // Notice no await
  loadData()
})
```

By calling `loadData` but _not_ awaiting it, we allow the outer `useEffect` function to finish while `loadData` is still executing. The last piece is that if we're depending on the results from `loadData`, then `loadData` needs to update the component state when its complete. We can do this easily buy setting the state from within the asynchornous function within `useEffect`.

```javascript
const [data, setData] = useState()

useEffect(() => {
  const loadData = async () => {
    const data = await fetchData()

    setData(data)
  }

  // Look Mom! No await!
  loadData()
})
```

Now we can load data asynchronously without blocking our thread. Another way to think about it, is that `useEffect` has no concern with `loadData` finishing, because `loadData` will update the state on its own, triggering a re-render with our data. All set? Well kinda. Depending on your specific situation, there are a few more things you should consider:

1. Handling error responses.
2. Preventing data from being fetched again if it's already loaded.
3. When/how to mark data as "stale" so fresh data can be fetched.

To see an advanced use of `useEffect` check out my post on [Using Generators with React](/using-generators-with-react)
