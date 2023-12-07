import styles from "../style.module.css";

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    };
    return <div className={styles.todoItemDiv}>
        <div className={styles.todoitem}>
            <h4 className={styles.todoname}>{todoItem.name}</h4>
            <button onClick={deleteTodo} className={styles.deletebutton}>Done</button>
        </div>
    </div>
}

export default Todo;
