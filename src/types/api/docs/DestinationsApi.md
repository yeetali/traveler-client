# DestinationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**destinationsControllerCreate**](#destinationscontrollercreate) | **POST** /destinations | |
|[**destinationsControllerFindAll**](#destinationscontrollerfindall) | **GET** /destinations | |

# **destinationsControllerCreate**
> Destination destinationsControllerCreate()


### Example

```typescript
import {
    DestinationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DestinationsApi(configuration);

let name: string; // (default to undefined)
let country: string; // (default to undefined)
let media: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.destinationsControllerCreate(
    name,
    country,
    media
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
| **country** | [**string**] |  | defaults to undefined|
| **media** | [**File**] |  | (optional) defaults to undefined|


### Return type

**Destination**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destinationsControllerFindAll**
> Array<Destination> destinationsControllerFindAll()


### Example

```typescript
import {
    DestinationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DestinationsApi(configuration);

let orderBy: 'name' | 'country' | 'createdAt' | 'updatedAt'; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let country: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let order: 'ASC' | 'DESC'; // (optional) (default to undefined)
let relations: Array<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.destinationsControllerFindAll(
    orderBy,
    name,
    country,
    page,
    limit,
    order,
    relations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | [**&#39;name&#39; | &#39;country&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;name&#39; &#124; &#39;country&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **country** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** |  | (optional) defaults to undefined|
| **relations** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|


### Return type

**Array<Destination>**

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

