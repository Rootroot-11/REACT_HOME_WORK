export default function Users({items}) {
  return (
    <div>
        {items.map(value => <div>{value.name}</div>)}
    </div>
  );
}