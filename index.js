const Button = (props) => {
  const { text, className } = props;
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};

const element = (
  <div className="Container">
    <h1 className="Heading">Social Buttons</h1>
    <div className="con">
      <Button className="like" text="Like" />
      <Button className="comment" text="Comment" />
      <Button className="share" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
