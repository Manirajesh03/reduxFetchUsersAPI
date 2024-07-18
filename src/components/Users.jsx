import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./redux/fetchApi";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  useEffect(() => {
    if (getUsers) {
      setUsers(getUsers.users);
    }
  }, [getUsers]);

  return (
    <>
      <center>
        <h1>List of users</h1>
      </center>
      <div className="user-profile">
        {users.map((user) => (
          <div className="user-card">
            <h1>{user.name}</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => navigate(`/user/${user.id}`)}>
              Show Profile
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
