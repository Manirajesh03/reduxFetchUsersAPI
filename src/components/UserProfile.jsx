import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "./redux/fetchApi";

const UserProfile = () => {
  const users = useSelector((state) => state?.users);
  const params = useParams();
  let userProfile = users?.find((user) => user.id === Number(params.id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (users?.length === 0 || users?.length === undefined) {
      dispatch(fetchApi());
    }
  }, []);

  return (
    <>
      <center>
        <h1>{userProfile?.name} Details</h1>
      </center>
      <div className="user-profile">
        <div className="user-card">
          <h1>Name: {userProfile?.name}</h1>
          <p>Email: {userProfile?.email}</p>
          <p>Username: {userProfile?.username}</p>
          <p>Phone: {userProfile?.phone}</p>
          <p>Website: {userProfile?.website}</p>
          <p>Street Name: {userProfile?.address?.street} </p>
          <p>City: {userProfile?.address?.city}</p>
          <p>Zipcode: {userProfile?.address?.zipcode}</p>
          <button onClick={() => navigate("/")}>Back to home</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
