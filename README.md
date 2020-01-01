# DjangoWithReact

## Spac

- Frontend
  - Framework : React
  - State Management : Redux
  - Bundler : webpack
- Backend
  - Framework : Django (REST API)

## settings.json 설정 auto fix

```json
...
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  }
```