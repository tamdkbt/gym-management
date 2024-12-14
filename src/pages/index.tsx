import Layout from '@/components/Layout/Layout'
import MemberList from '@/components/Members/MemberList'

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Welcome to Gym Management System
        </h1>
        <MemberList />
      </div>
    </Layout>
  )
}
