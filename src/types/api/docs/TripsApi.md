# TripsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**tripsControllerAddExpenseToTrip**](#tripscontrolleraddexpensetotrip) | **POST** /trips/{id}/expenses | |
|[**tripsControllerCreate**](#tripscontrollercreate) | **POST** /trips | |
|[**tripsControllerDeleteExpense**](#tripscontrollerdeleteexpense) | **DELETE** /trips/{id}/expenses/{expenseId} | |
|[**tripsControllerFindAll**](#tripscontrollerfindall) | **GET** /trips | |
|[**tripsControllerFindOne**](#tripscontrollerfindone) | **GET** /trips/{id} | |
|[**tripsControllerRemove**](#tripscontrollerremove) | **DELETE** /trips/{id} | |
|[**tripsControllerUpdate**](#tripscontrollerupdate) | **PATCH** /trips/{id} | |
|[**tripsControllerUpdateExpense**](#tripscontrollerupdateexpense) | **PATCH** /trips/{id}/expenses/{expenseId} | |

# **tripsControllerAddExpenseToTrip**
> Expense tripsControllerAddExpenseToTrip(createExpenseDto)


### Example

```typescript
import {
    TripsApi,
    Configuration,
    CreateExpenseDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)
let createExpenseDto: CreateExpenseDto; //

const { status, data } = await apiInstance.tripsControllerAddExpenseToTrip(
    id,
    createExpenseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createExpenseDto** | **CreateExpenseDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Expense**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerCreate**
> Trip tripsControllerCreate(createTripDto)


### Example

```typescript
import {
    TripsApi,
    Configuration,
    CreateTripDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let createTripDto: CreateTripDto; //

const { status, data } = await apiInstance.tripsControllerCreate(
    createTripDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTripDto** | **CreateTripDto**|  | |


### Return type

**Trip**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerDeleteExpense**
> tripsControllerDeleteExpense()


### Example

```typescript
import {
    TripsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)
let expenseId: number; // (default to undefined)

const { status, data } = await apiInstance.tripsControllerDeleteExpense(
    id,
    expenseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **expenseId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerFindAll**
> Array<Trip> tripsControllerFindAll()


### Example

```typescript
import {
    TripsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let orderBy: 'title' | 'startDate' | 'endDate' | 'createdAt' | 'updatedAt'; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let order: 'ASC' | 'DESC'; // (optional) (default to undefined)
let relations: Array<string>; // (optional) (default to undefined)
let title: string; // (optional) (default to undefined)
let startDate: string; // (optional) (default to undefined)
let endDate: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.tripsControllerFindAll(
    orderBy,
    page,
    limit,
    order,
    relations,
    title,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | [**&#39;title&#39; | &#39;startDate&#39; | &#39;endDate&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;title&#39; &#124; &#39;startDate&#39; &#124; &#39;endDate&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** |  | (optional) defaults to undefined|
| **relations** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **startDate** | [**string**] |  | (optional) defaults to undefined|
| **endDate** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<Trip>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerFindOne**
> Trip tripsControllerFindOne()


### Example

```typescript
import {
    TripsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.tripsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Trip**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerRemove**
> tripsControllerRemove()


### Example

```typescript
import {
    TripsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.tripsControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerUpdate**
> Trip tripsControllerUpdate(updateTripDto)


### Example

```typescript
import {
    TripsApi,
    Configuration,
    UpdateTripDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)
let updateTripDto: UpdateTripDto; //

const { status, data } = await apiInstance.tripsControllerUpdate(
    id,
    updateTripDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTripDto** | **UpdateTripDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Trip**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tripsControllerUpdateExpense**
> tripsControllerUpdateExpense(updateExpenseDto)


### Example

```typescript
import {
    TripsApi,
    Configuration,
    UpdateExpenseDto
} from './api';

const configuration = new Configuration();
const apiInstance = new TripsApi(configuration);

let id: number; // (default to undefined)
let expenseId: number; // (default to undefined)
let updateExpenseDto: UpdateExpenseDto; //

const { status, data } = await apiInstance.tripsControllerUpdateExpense(
    id,
    expenseId,
    updateExpenseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateExpenseDto** | **UpdateExpenseDto**|  | |
| **id** | [**number**] |  | defaults to undefined|
| **expenseId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

