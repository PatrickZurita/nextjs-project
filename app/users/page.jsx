import User from "@/components/User";

async function fetchUsers(){
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
}

export default async function UserPages(){
    const users = await fetchUsers();
    return (<div>
      {
        users.map((user)=>(
            <User user={user} key={user.id} />
        ))
      }
    </div>
    );
}

