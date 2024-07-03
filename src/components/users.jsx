import User from "./user";

const Users = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full">
      <p className="text-center">Users</p>
      {data.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default Users;
