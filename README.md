# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Issue description

Try building the app using:

```sh
npm run build
```

You'll get the following error:

```
[remix] Failed to resolve entry for package "@optimajet/workflow-designer-react". The package may have incorrect main/module/exports specified in its package.json.
```

If you want to try different things, you can enable client side only rendering, by wrapping the component as below:

```jsx
<ClientOnly>
    {() => <WorkflowDesigner ... />}
</ClientOnly>
```

This still doesn't work, but it's perhaps an acceptable workaround, ideally we want SSR to work (the version in the repository, without `<ClientOnly />`).