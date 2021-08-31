export default function StaticUserDetails({location: state}) {
  console.log(state);
  return (
    <div>
      {
        JSON.stringify(state)
      }
    </div>
  );
}