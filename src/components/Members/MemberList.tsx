import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MemberList() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await axios.get('/api/members')
      setMembers(response.data)
    }
    fetchMembers()
  }, [])

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Members</h2>
      <div className="grid gap-4">
        {members.map((member: any) => (
          <div key={member.id} className="border p-4 rounded">
            <h3>{member.firstName} {member.lastName}</h3>
            <p>{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
