

 Important note to understand the app behavior.
 
 <hr/>


inside /src/data/data.json you can find .json file from task requirments, we added a little data fields and two extra categories to spread the UI to be like the design of the task.
we use this data as the refrence point for the app, when app first boots up; we store these cateogries and thier releated movies into Async Storage, user can add categories and movies, and only can remove movies.

if you at any point want to restore the original data set at any time you can do so by pressed the trash icon in the categories screen.
data from json file only used one time when app first boots up to fill the storage, then we operate compeltly on the async storage for saving and retryeving data.

<h5> ⚠️  we didn't implement edit feature because the time bound. <h5>

