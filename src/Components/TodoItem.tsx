type propsItems = (item :string)
const TodoItem <propsItems> = (props : propsItems): propsItems => {
  return (
    <div>
      <ul>{props.item}</ul>
    </div>
  );
};

export default TodoItem;
