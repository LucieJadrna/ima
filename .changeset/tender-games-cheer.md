---
"@ima/core": minor
---

Controller and Extension event bus methods can be targeted with prefix. Prefix is set by static field in controller/extension class e.g. `$name = 'fireEventPrefix';`. Event is then `fireEventPrefix.eventName`.
