import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import UserCard from "../userCard/UserCard";
import { useEffect } from "react";

export default function UsersPage() {
   const dispatch = useDispatch();

   const { users, loading, error } = useSelector(state => state.userSlice);

   useEffect(() => {
      dispatch(fetchUsers());
   }, [dispatch]);

   return (
      <>
         <button onClick={() => dispatch(fetchUsers())}>Get Users</button>
         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}
         <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            {users.length > 0 ? (
               users.map(user => <UserCard key={user.id} userInfo={user} />)
            ) : (
               !loading && <p>Список пуст</p>
            )}
         </div>
      </>
   );
}
