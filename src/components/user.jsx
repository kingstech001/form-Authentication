const User = ({ user }) => {

    if (!user) {
      return <div>No product data available</div>;
    }
  
    const { name, email} = user;

    return (
      <div className="flex flex-col my-3 p-5 bg-white w-full overflow-hidden">
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  };
  
  export default User;
  