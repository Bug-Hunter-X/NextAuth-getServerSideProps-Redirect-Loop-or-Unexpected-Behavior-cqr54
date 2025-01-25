```javascript
import {unstable_getServerSession} from 'next-auth';

export default function Profile({session}) {
  if(!session) {
    return <div>Access Denied</div>
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
```