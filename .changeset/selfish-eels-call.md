---
"@ima/server": patch
---

Add `routeName` key to `res.locals` instead of `res.$IMA`, since `res.$IMA` should not be used anymore.
