```js
<div>
  <PostContent
    bodyRaw={[
      {
        _key: '1af1e24f883f',
        _type: 'block',
        children: [
          {
            _key: '4816eda5b39e',
            _type: 'span',
            marks: [],
            text:
              "Sometimes you'll need to call an asynchronous function in order to fetch some data or dynamically import a module. In those instances, wrap the asynchronous function call inside of a useEffect hook."
          }
        ],
        markDefs: [],
        style: 'normal'
      },
      {
        _key: 'ffd9c02e6ba4',
        _type: 'codeSnippet',
        snippet: {
          _type: 'code',
          code:
            'const [data, setData] = useState()\n\nuseEffect(() => {\n  const loadData = async () => {\n    const data = await fetchData()\n\n    setData(data)\n  }\n\n  loadData()\n})',
          language: 'typescript'
        },
        title: 'useEffect'
      },
      {
        _key: '181c0963a204',
        _type: 'block',
        children: [
          {
            _key: '6b4521ceac0e',
            _type: 'span',
            marks: [],
            text:
              'The magic here happens when we call the asynchronous function '
          },
          {
            _key: 'dbda78e09050',
            _type: 'span',
            marks: ['code'],
            text: 'loadData()'
          },
          {
            _key: '4844bbcf02c2',
            _type: 'span',
            marks: [],
            text: ' b'
          },
          {
            _key: '7844bf2a68ae',
            _type: 'span',
            marks: [],
            text: 'ut without '
          },
          {
            _key: '03e1ce5872d6',
            _type: 'span',
            marks: ['code'],
            text: 'await'
          },
          {
            _key: 'f7fa803fa2bf',
            _type: 'span',
            marks: [],
            text:
              '. This calls the function but does not wait for it to complete, allowing React to continue rendering, and preventing the main thread from being blocked while waiting for `loadData()` to resolve.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ]}
  />
</div>
```
