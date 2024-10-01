import Hero from '../components/Fragments/Hero'
import AuthLayout from '../components/Layout/AuthLayout'
import HomeSection from '../components/Fragments/HomeSection'

const Home = () => {
  return (
      <AuthLayout>
            <Hero />
            <HomeSection />
      </AuthLayout>
  )
}

export default Home
