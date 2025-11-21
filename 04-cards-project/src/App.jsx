import React from 'react'
import Card from './Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/nvidia-2.svg",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$32/hr",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
    companyName: "Oracle",
    datePosted: "4 days ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Austin, TX"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
    companyName: "Spotify",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/airbnb-2.svg",
    companyName: "Airbnb",
    datePosted: "6 days ago",
    post: "Full-Stack Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/uber-2.svg",
    companyName: "Uber",
    datePosted: "5 days ago",
    post: "Data Analyst",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$38/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/intel-4.svg",
    companyName: "Intel",
    datePosted: "3 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Portland, OR"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/paypal.svg",
    companyName: "PayPal",
    datePosted: "7 days ago",
    post: "Security Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon.svg",
    companyName: "TikTok",
    datePosted: "2 days ago",
    post: "Frontend Engineer (React)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Los Angeles, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
    companyName: "Salesforce",
    datePosted: "1 day ago",
    post: "DevOps Associate",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    companyName: "Stripe",
    datePosted: "4 days ago",
    post: "API Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Dublin, Ireland"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/zoom.svg",
    companyName: "Zoom",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
    companyName: "Slack",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    companyName: "Shopify",
    datePosted: "5 days ago",
    post: "Full-Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Ottawa, Canada"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/siemens-wordmark.svg",
    companyName: "Siemens",
    datePosted: "7 days ago",
    post: "Automation Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Munich, Germany"
  }
];



  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} img={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App