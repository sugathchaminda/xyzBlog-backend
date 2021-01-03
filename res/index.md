
# Xyz



## Indices

* [Auth](#auth)
  * [Register user](#1-register-user)
  * [Login user](#2-login-user)
  * [Log out](#3-log-out)
  * [User Profile](#4-profile)
  * [User Info](#5-user-information)
  * [Close Account](#6-close-user-account)

* [Post](#post)
  * [Get active posts](#1-get-active-posts)
  * [Get all posts](#2-get-all-posts)
  * [Create post](#3-create-post)
  * [Get post by id](#4-get-post-by-id)
  * [Delete post](#5-delete-post)
  * [Approve post](#6-approve-post)
  * [Edit post](#7-edit-post)
  * [Add comment](#8-add-comment)

* [Admin](#admin)

  * [Get all users](#1-get-all-users)
  * [Update user role](#2-update-user-status)
  * [Update user status](#3-update-user-role)

--------


## Auth

### 1. Register user



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
	"first_name": "Sugath",
	"last_name": "Fernando",
	"email": "sugath1984@gmail.com",
	"password": "1qaz!QAZ",
}
```



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
	"password": "1qaz!QAZ"
}
```



### 3. Log out



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/logout
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 4. Profile



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/profile
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  | Get profile and user posts



### 5. User Information



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  | Get profile information




### 6. Close user account



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



## Post




### 1. Get active posts



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |


### 2. Get all posts



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/posts/all
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 3. Create post



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/posts


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |


***Body:***

```js        
{
	"title": "My post title",
  "text": "My post text"
}

```



### 4. Get post by id



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/posts/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |


### 5. Delete post



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/posts/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



### 6. Approve post



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/posts/approve/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"approve_status": "Rejected"
}

```
### 7. Edit post



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/posts/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
  "text": "Test text",
  "title": "Test title"
}
```

### 8. Add comment



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/posts/5dee321e1f454b26a7e1ff55/comment
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



## Admin

### 1. Get all users



***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/admin/users
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"first_name": "Sugath",
	"last_name": "Fernando",
	"email": "sugath1984@gmail.com",
	"password": "1qaz!QAZ",
}
```



### 2. Update user status



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1/update/user/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"status": "active"
}
```



### 3. Update user role



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/api/v1//update/userRole/5dee321e1f454b26a7e1ff55
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
