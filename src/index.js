import {observable, autorun} from 'mobx';

var todoStore = observable({
    /* 可观察状态 */
    todos: [],

    /* 一个衍生值 */
    get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
});

/* 一个对状态进行观察的函数 */
autorun(function() {
    console.log("Completed %d of %d items",
        todoStore.completedCount,
        todoStore.todos.length
    );
});

/* 一些改变状态的行为 */
todoStore.todos[0] = {
    title: "Take a walk",
    completed: false
};
// -> 同步打印 'Completed 0 of 1 items'

todoStore.todos[0].completed = true;