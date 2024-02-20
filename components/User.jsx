import Link from 'next/link'

export default function User({ user }) {

  return (
    <div>
      <Link href={`/users/${user.id}`} >
        <h3>{user.id}. {user.first_name} {user.last_name}</h3>
      </Link>
      <p>{user.email}</p>
    </div>
  )
}