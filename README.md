# furnitureapp

Quick project made to help BBk understand how to get a variable with the id passed through Routes

## Set Up

Clone this repo

Run: npm install

Run: npm run serve

Navigate to shown url when npm run serve has finished


## Explanation

Here we are using vuex as a tool to hold the furniture data. This can be a list of the furniture object you mentioned in your question.
In the store we have a getter that will pass the list through to the pages that require it.

In furnitureDetail.vue we take the id from our route parameters and use it to filter the item we are looking for by id
The item is then passed to a component through a prop to the component ProductDetail.vue

# furnitureapp
