```javascript
import {unstable_getServerSession} from 'next-auth';

async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);

  // Check if the user is authenticated
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

export default function Profile() {
  return <div>Profile Page</div>;
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