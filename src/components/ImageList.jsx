export function ImageList(props) {
  return (
    <ul>
      {props.images.map((image) => {
        return (
          <li key={image.id}>
            <img src={image.urls.regular} alt={image.description} />
          </li>
        );
      })}
    </ul>
  );
}
