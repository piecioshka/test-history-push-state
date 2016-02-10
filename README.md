# test-history-push-state

> :ledger: Test app create for testing `history.pushState`

## How it works?

1. **Click** to any item on menu. This action ad to `history` state with new link. PAGE IS NOT REALODING
2. Now, **reload page**. URL will be the same, page too. 
3. For see changes I add `(2)` to each dynamic page title.

## Deployment

Use `gh-pages` package to create `gh-pages` branch for create GitHub Pages.

```
npm run deploy
```
