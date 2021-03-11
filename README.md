# Casedesigner

## Usage

docker-compose -f docker-compose-dev.yml up
yarn dev

docker inspect postgres | grep IPAddress.

You must launch the scripts at the root level.

### Shared

You can consume it in your `frontend` and `backend` just by importing it like this

```typescript
import { foo } from '@case-designer/shared'
```
