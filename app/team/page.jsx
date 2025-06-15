"use client";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

import ProfileCard from "@/components/ui/ProfileCard";

const TeamPage = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="relative flex items-center justify-center flex-col w-full">
          <FloatingNav navItems={navItems} />
          <div className="flex justify-center relative my-6 md:my-10 lg:my-20 z-10 px-4 mt-20 md:mt-24">
            <TextGenerateEffect
              words=".... {CodeX} Tech Leaders;_ "
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
          </div>
        </div>

        {/* Main content container - full width with minimal padding */}
        <div className="w-full px-2 sm:px-4 md:px-6 pb-16 max-w-[2000px] mx-auto">
          {/* Card Section */}
          <div className="grid grid-cols-1 xs:grid-cols- md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-8">
            {/* Yash component is imported but not used - adding it here */}
           
              <ProfileCard
  className=" h-[20px]"
  name="Shubham Bhat"
  title="President"
              handle="shubham"
              iconUrl="https://codexclubit.vercel.app/img/logo.png"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./Team/shubham.png"
  showUserInfo={true}
              enableTilt={true}

              

              onContactClick={() => window.open('https://www.linkedin.com/in/bhatsupshubham/', '_blank')}
            />   <ProfileCard
  name="Vaibhav Devkar"
  title="Vice-President"
  handle="Vaibhav"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./Team/vaibhav.png"
  showUserInfo={true}
  enableTilt={true}
  
  
  
  onContactClick={() => window.open('https://github.com/vaibhavd6966', '_blank')}
              />
  <ProfileCard
className=" h-[20px]"
name="Tanishq Kokane"
title="Marketing Head"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
handle="Tanishq"
status="Online"
contactText="Contact Me"
avatarUrl="./Team/Tanu.png"
showUserInfo={true}
    enableTilt={true}

    

onContactClick={() => window.open('https://www.linkedin.com/in/tanishq-kokane-7611801b4/', '_blank')}
  />
 <ProfileCard
  className=" h-[20px]"
  name="Yash Varpe"
  title="Web-Dev Head"
  handle="Yash"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/yashbg.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://yashvarpe.vercel.app', '_blank')}
            /> <ProfileCard
  className=" h-[20px]"
  name="Om Rindhe"
  title="Technical Head"
  handle="Om"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/om.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://www.linkedin.com/in/om-rindhe105/', '_blank')}
            />
          
            <ProfileCard
  className=" h-[20px]"
  name="Aditya Kadam"
  title="Event Co-ordinator"
  handle="Aditya"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/adi.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://www.linkedin.com/in/aditya-kadam-757b68255/', '_blank')}
            />   <ProfileCard
  className=" h-[20px]"
  name="Sayali Bhakare"
  title="Documentation Head"
  handle="Sayali"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/sayali.png"
  showUserInfo={true}
              enableTilt={true}

              

              onContactClick={() => window.open('https://www.linkedin.com/in/sayali-bhakare-43710b244/', '_blank')}
              
/><ProfileCard
  className=" h-[20px]"
  name="Harshad Kambale
"
  title="Event Co-ordinator"
  handle="Harshad"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/harshad.png"
  showUserInfo={true}
              enableTilt={true}

              

              onContactClick={() => window.open('https://www.linkedin.com/in/harshad-kamble-37ba6428a/', '_blank')}
              
/>
         
            <ProfileCard
  className=" h-[20px]"
  name="Pratik Khandge"
  title="Event Co-ordinator"
  handle="Pratik"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/pratik.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://www.linkedin.com/in/pratik-khandge-668a042b2/', '_blank')}
/>     <ProfileCard
  className=" h-[20px]"
  name="Yogesh Landge"
  title="Secretary"
  handle="Yogesh"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/yogesh.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://www.linkedin.com/in/yogesh-landge-a79383279/', '_blank')}
            />     <ProfileCard
  className=" h-[20px]"
  name="Darshana Chaudhari"
  title="Girls Representative"
  handle="Darshana"
  status="Online"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  contactText="Contact Me"
  avatarUrl="./Team/darshna.png"
  showUserInfo={true}
              enableTilt={true}

              

  onContactClick={() => window.open('https://www.linkedin.com/in/darshana-chaudhari-41b24a259/', '_blank')}
/>   <ProfileCard
  className=" h-[20px]"
  name="Pratik Shirode"
  title="Photography Lead"
  handle="Pratik"   iconUrl="https://codexclubit.vercel.app/img/logo.png"
    status="Online"
  contactText="Contact Me"
  avatarUrl="./Team/partik1.png"
  showUserInfo={true}
              enableTilt={true}

              

              onContactClick={() => window.open('https://www.linkedin.com/in/pratik-shirode-7b60092ba/', '_blank')}
              
/>     
          <ProfileCard
  className=" h-[20px]"
  name="Sagar Karegaokar"
  title="Design lead"
  handle="Sagar"  iconUrl="https://codexclubit.vercel.app/img/logo.png"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./Team/sagar.png"
  showUserInfo={true}
              enableTilt={true}

              

              onContactClick={() => window.open('https://www.linkedin.com/in/sagar-karegaonkar/', '_blank')}
              
/>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TeamPage;
