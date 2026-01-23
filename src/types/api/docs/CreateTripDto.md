# CreateTripDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [default to undefined]
**startDate** | **string** |  | [default to undefined]
**endDate** | **string** |  | [default to undefined]
**destinations** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**expenses** | [**Array&lt;CreateExpenseDto&gt;**](CreateExpenseDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateTripDto } from './api';

const instance: CreateTripDto = {
    title,
    startDate,
    endDate,
    destinations,
    expenses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
