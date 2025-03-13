To reproduce the issue:

```
npm run dev

(in a new terminal)
npm run test
```

Even though `onMount` is called during component initialization, you should see the following error:
```
Svelte error: lifecycle_outside_component
`onMount(...)` can only be used during component initialisation
```

