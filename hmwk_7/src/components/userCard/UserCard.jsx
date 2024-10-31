
export default function UserCard({ userInfo: { userId, id, title, body } }) {
   return (
      <div key={id} style={{
         width: '250px',
         height: '300px',
         padding: '10px',
         boxShadow: '2px 1px 10px black',
         border: '1px solid white'
      }}>
         <h1>{userId}</h1>
         <p>{title}</p>
         <p>{body}</p>
      </div>
   )
}
