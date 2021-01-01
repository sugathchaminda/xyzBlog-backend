
# Xyz



## Indices

* [Auth](#auth)

  * [Get auth user](#1-get-auth-user)
  * [Login user](#2-login-user)
  * [Register user](#3-register-user)
  * [Close user account](#4-close-user-account)
  * [Confirm user accout](#5-confirm-user-accout)
  * [Forgot password](#6-forgot-password)
  * [Reset password](#7-reset-password)
  * [Change Password](#8-change-password)

* [Profies](#profies)

  * [Create profile](#1-create-profile)
  * [Get current profile](#2-get-current-profile)
  * [Get profiles](#3-get-profiles)
  * [Get profile by handle](#4-get-profile-by-handle)
  * [Get github repos by user](#5-get-github-repos-by-user)
  * [Get profile by id](#6-get-profile-by-id)

* [Experience](#experience)

  * [Add experience](#1-add-experience)
  * [Remove  experience](#2-remove--experience)

* [Qualification](#qualification)

  * [Add qualification](#1-add-qualification)
  * [Remove qualification](#2-remove-qualification)

* [Post](#post)

  * [Create post](#1-create-post)
  * [Delete comment](#2-delete-comment)
  * [Get post by id](#3-get-post-by-id)
  * [Get posts](#4-get-posts)
  * [Like & unlike post](#5-like-&-unlike-post)
  * [Add comment](#6-add-comment)
  * [Delete post](#7-delete-post)

* [Review](#review)

  * [Add review](#1-add-review)
  * [Get user reviews](#2-get-user-reviews)
  * [Delete review](#3-delete-review)
  * [Update review](#4-update-review)


--------


## Auth



### 1. Get auth user



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 2. Login user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"email": "sugath1984@gmail.com",
	"password": "123123123"
}
```



### 3. Register user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"firstName": "Shadow",
	"lastName": "Woofy",
	"email": "sugath1984@gmail.com",
	"mobile": "0775661002",
	"password": "123123123",
	"confirmPassword": "123123123"
}
```



### 4. Close user account



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/closeAccount
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 5. Confirm user accout



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZWE2ZTMyZmE3Njg2MWQxMThhNDdlMSIsImlhdCI6MTU3NTY0NDczMSwiZXhwIjoxNTc1NzMxMTMxfQ.pVYOAOwTBVWwJMco7ebkBoWopg6cxVlQ0qKmM3b3GCQ
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
|  |  |  |
| Content-Type | application/json |  |



### 6. Forgot password



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotPassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"email": "sugath1984@gmail.com"
}
```



### 7. Reset password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/resetPassword/780a7c760a6cd82201c01d581f628bcf7e088f5f
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"password": "111222333"
}
```



### 8. Change Password



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/auth/changePassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"currentPassword": "111222333",
	"newPassword": "123123123"
}
```



## Profies



### 1. Create profile



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/profiles
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "designation": "SSE",
    "skills": ["React", "Node", "Reac-Native"],
    "address": "29 champs elysé paris",
    "company": "FISHERY",
    "bio": "Im a programmer"
}
```



### 2. Get current profile



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/profiles/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 3. Get profiles



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/profiles
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. Get profile by handle



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/profiles/handle/shadowwoofy
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 5. Get github repos by user



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/profiles/github


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 6. Get profile by id



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/profiles/5dee30541f454b26a7e1ff51
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



## Experience



### 1. Add experience



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/experiences
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"title": "ASE",
    "company": "ARMY",
    "location": "PANAGODA",
    "from": "2015-10-20",
    "to": "2016-10-20",
    "current": false,
    "description": "First job as an associate software engineer"
}

```



### 2. Remove  experience



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/experiences/5dee31f41f454b26a7e1ff53
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



## Qualification



### 1. Add qualification



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/qualifications
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"school": "Otago",
    "qualification": "GDIT",
    "field": "IT",
    "from": "2015-10-20",
    "to": "2016-10-20",
    "current": false,
    "description": "Completed successfully within 2 years"
}
```



### 2. Remove qualification



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/qualifications/5dee32051f454b26a7e1ff54
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



## Post



### 1. Create post



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"title": "Second Post",
    "text": "My second post for developer connector"
}

```



### 2. Delete comment



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:5000/api/v1/posts/5dee321e1f454b26a7e1ff55/comment/5dee32761f454b26a7e1ff58
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 3. Get post by id



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/posts/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. Get posts



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| user | 5dee30541f454b26a7e1ff51 |  |



### 5. Like & unlike post



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/posts/like/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"title": "Second Post",
    "text": "My second post for developer connector"
}

```



### 6. Add comment



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/posts/5dee321e1f454b26a7e1ff55/comment
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"text": "Test comment"
}
```



### 7. Delete post



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:5000/api/v1/posts/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



## Review



### 1. Add review



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"reviewee": "5d7a514b5d2c12c7449be042",
	"title": "Test title",
    "text": "Test text",
    "rating": 8
}

```



### 2. Get user reviews



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/v1/reviews/user/5d7a514b5d2c12c7449be042
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 3. Delete review



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: http://localhost:5000/api/v1/reviews/5dee32c71f454b26a7e1ff5a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. Update review



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:5000/api/v1/reviews/5dee32c71f454b26a7e1ff5a
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"reviewee": "5dea4bb3688938066fb0cd9e",
	"title": "updated title",
    "text": "updated text",
    "rating": 10
}

```