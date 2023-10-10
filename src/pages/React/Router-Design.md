# Router Design
## According to CRUD every action have to defined router name
### *Function* ﹐ "Verb" ﹐ "Url"
### *Browse all todo* ﹐"GET" "/"
### *get form to create todo* ﹐"GET" "/todos/new"
### *create new todo* ﹐"POST" "/todos"
### *browse specify todo* ﹐"GET" "/todos/:id"
### *get form to edit specify todo* ﹐ "GET" "/todos/:id/edit"
### *edit specify todo* ﹐"PUT" "/todos/:id"
### *delete specify todo* ﹐"DELETE" "/todos/:id"